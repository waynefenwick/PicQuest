const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Favorite, Image } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { _id }, context) => {
      if (context.user) {
        return await User.findById(_id);
      }
      throw new AuthenticationError('Not logged in');
    },
    categories: async () => {
      return await Category.find();
    },
    category: async (parent, { _id }) => {
      return await Category.findById(_id);
    },
    favorites: async (parent, args, context) => {
      if (context.user) {
        return await Favorite.find({ userId: context.user._id });
      }
      throw new AuthenticationError('Not logged in');
    },
    images: async () => {
      return await Image.find();
    },
    image: async (parent, { _id }) => {
      return await Image.findById(_id);
    },
    // Resolver for fetching images from the Unsplash API
    unsplashImages: async (parent, { category }) => {
      const apiUrl = `https://api.unsplash.com/photos/random?count=10&query=${category}&client_id=${process.env.UNSPLASH_API_KEY}`;
    
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        console.log('Unsplash API Response:', data);
    
        // Check if the response is an array of images
        if (!Array.isArray(data)) {
          console.error('Unexpected response format from Unsplash API');
          throw new Error('Unable to fetch images from Unsplash API');
        }
    
        const images = data.map(imageData => ({
          unsplashId: imageData.id,
          imageUrl: imageData.urls.regular,
          description: imageData.description,
          // ... Other image fields
        }));
    
        return images;
      } catch (error) {
        console.error('Error fetching photos from Unsplash:', error);
        throw new Error('Unable to fetch images from Unsplash API');
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
  addFavorite: async (parent, { imageId }, context) => {
    if (context.user) {
      const favorite = await Favorite.create({
        userId: context.user._id,
        imageId,
      });
      return favorite;
    }
    throw new AuthenticationError('Not logged in');
  },
  removeFavorite: async (parent, { _id }, context) => {
    if (context.user) {
      await Favorite.findByIdAndDelete(_id);
      return 'Favorite removed';
    }
    throw new AuthenticationError('Not logged in');
  },
  // Resolver for adding a new image to the database and fetching its details from Unsplash API
  addImageAndFetchDetails: async (parent, { unsplashId }) => {
    const apiUrl = `https://api.unsplash.com/photos/${unsplashId}?client_id=${process.env.UNSPLASH_API_KEY}`;

    try {
      const response = await fetch(apiUrl);
      const imageData = await response.json();

      // Save the image details to your database
      const newImage = await Image.create({
        unsplashId: imageData.id,
        imageUrl: imageData.urls.regular,
        description: imageData.description,
        // ... Other image fields
      });

      return newImage;
    } catch (error) {
      console.error('Error fetching image details from Unsplash:', error);
      throw new Error('Unable to fetch image details from Unsplash API');
    }
  },
},
};

module.exports = resolvers;

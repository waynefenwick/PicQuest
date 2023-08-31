const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    favoriteImages: [Image]
  }
  type Category {
    _id: ID
    name: String
  }

  type Image {
    _id: ID
    unsplashId: String
    imageUrl: String
    description: String
    tags: [Tag]
  }

  type Tag {
    slug: String
    title: String
  }

  type Favorite {
    _id: ID
    userId: ID
    imageId: ID
    timestamp: String
  }

  
  type Auth {
    token: ID
    user: User
  }
  type Query { 
    user: User
    categories: [Category]
    users: [User]
    category(_id: ID!): Category
    favorites: [Favorite]
    images: [Image]
    image(_id: ID!): Image
    unsplashImages(category: String!): [Image]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(imageId: ID!): Favorite
    removeFavorite(_id: ID!): String
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    addImageAndFetchDetails(unsplashId: String!): Image
  }
`;

module.exports = typeDefs;

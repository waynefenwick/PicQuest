import { gql } from '@apollo/client';
export const QUERY_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      name
    }
  }
`;
export const QUERY_USER = gql`
  query getUser {
    user {
      _id
      firstName
      lastName
      email
      favoriteImages {
        _id
        unsplashId
        imageUrl
        description
        tags {
          slug
          title
        }
      }
    }
  }
`;

export const QUERY_FAVORITES = gql`
  query getFavorites {
    favorites {
      _id
      userId
      imageId
      timestamp
    }
  }
`;

export const QUERY_IMAGES = gql`
  query getImages {
    images {
      _id
      unsplashId
      imageUrl
      description
      tags {
        slug
        title
      }
    }
  }
`;

export const QUERY_CATEGORY = gql`
  query getCategory($categoryId: ID!) {
    category(_id: $categoryId) {
      _id
      name
    }
  }
`;

export const QUERY_IMAGE = gql`
  query getImage($imageId: ID!) {
    image(_id: $imageId) {
      _id
      unsplashId
      imageUrl
      description
      tags {
        slug
        title
      }
    }
  }
`;
export const QUERY_UNSPLASH_IMAGES = gql`
  query getUnsplashImages($category: String!) {
    unsplashImages(category: $category) {
      _id
      unsplashId
      imageUrl
      description
      tags {
        slug
        title
      }
    }
  }
  `;

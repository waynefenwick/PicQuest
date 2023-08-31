import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_FAVORITE = gql`
  mutation addFavorite($imageId: ID!) {
    addFavorite(imageId: $imageId) {
      _id
      userId
      imageId
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($_id: ID!) {
    removeFavorite(_id: $_id)
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

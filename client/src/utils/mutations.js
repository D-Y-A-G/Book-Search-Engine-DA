import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookSavedInput) {
    saveBook(input: $input) {
      username
      _id
      bookCount
      savedBooks {
        authors
        description
        title
        bookId
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook ($bookId: String!)
  removeBook (bookId: $bookId) {
    {
      username
      _id
      bookCount
      savedBooks {
        authors
        description
        title
        bookId
        image
        link
      }
    }
      
  }
`;

import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(options: { email: $email, password: $password }) {
      accessToken
      refreshToken
      errors {
        field
        message
        constraints
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $screeName: String!
    $password: String!
    $repassword: String!
  ) {
    register(
      options: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        screenName: $screeName
        password: $password
        repassword: $repassword
      }
    ) {
      accessToken
      refreshToken
    }
  }
`;

export const REFRESH_ACCESS_TOKEN_MUTATION = gql`
  mutation AccessTokenMutation {
    refreshToken
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation LogoutMutation {
    logout
  }
`;

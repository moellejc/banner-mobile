import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(options: { email: $email, password: $password }) {
      accessToken
    }
  }
`;

import { gql } from "@apollo/client";
import {
  LoginResponse,
  RegisterResponse,
} from "../graphql/generator/FabricGQLTypes";
import { client } from "../lib/apollo";

const LOGIN_MUTATION = gql`
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

const REGISTER_MUTATION = gql`
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

const REFRESH_ACCESS_TOKEN_MUTATION = gql`
  mutation AccessTokenMutation {
    refreshToken
  }
`;

const LOGOUT_MUTATION = gql`
  mutation LogoutMutation {
    logout
  }
`;

export const register = async (
  firstName: string,
  lastName: string,
  email: string,
  screenName: string,
  password: string,
  repassword: string
): Promise<RegisterResponse> => {
  let registerRes = await client.mutate({
    mutation: REGISTER_MUTATION,
    variables: { firstName, lastName, email, screenName, password, repassword },
  });

  return registerRes.data.register as RegisterResponse;
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  let loginRes = await client.mutate({
    mutation: LOGIN_MUTATION,
    variables: { email, password },
    errorPolicy: "ignore",
  });

  return loginRes.data.login as LoginResponse;
};

export const logout = (): string => {
  return "";
};

import { gql } from "@apollo/client";
import { LoginResponse } from "../graphql/generator/FabricGQLTypes";
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

const LOGOUT_MUTATION = gql`
  mutation LogoutMutation {
    logout
  }
`;

export const register = (): string => {
  return "";
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  let loginRes = await client.mutate({
    mutation: LOGIN_MUTATION,
    variables: { email, password },
  });

  if (loginRes.data.login.errors) throw new Error("Error Authenticating");

  return loginRes.data.login as LoginResponse;
};

export const logout = (): string => {
  return "";
};

export const refreshAccessToken = (): string => {
  return "";
};

export const createRefreshToken = (): string => {
  return "";
};

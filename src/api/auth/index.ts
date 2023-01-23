import { REGISTER_MUTATION, LOGIN_MUTATION } from "./constants";
import { LoginResponse, RegisterResponse } from "../../types";
import { client } from "../../lib/apollo";

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

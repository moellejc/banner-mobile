import { FabricAPI } from "../api";
import { LoginResponse } from "../graphql/generator/FabricGQLTypes";

export const login = async (
  email: string,
  password: string
): Promise<boolean> => {
  // call Login API
  let res: LoginResponse = await FabricAPI.Auth.login(email, password);

  // update redux

  // update secure storage

  return true;
};

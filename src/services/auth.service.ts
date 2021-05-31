import { FabricAPI } from "../api";
import { LoginResponse } from "../graphql/generator/FabricGQLTypes";
import { Actions, store } from "../state";

export const login = async (
  email: string,
  password: string
): Promise<boolean> => {
  // call Login API
  let res: LoginResponse = await FabricAPI.Auth.login(email, password);

  // update redux
  store.dispatch({
    type: Actions.AuthActions.SET_TOKENS,
    payload: { token: res.accessToken },
  });

  // update secure storage

  return true;
};

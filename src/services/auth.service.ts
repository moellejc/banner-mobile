import { FabricAPI } from "../api";
import {
  FieldError,
  LoginResponse,
  RegisterResponse,
} from "../graphql/generator/FabricGQLTypes";
import { Actions, store } from "../state";
import * as MeService from "./me.service";
import * as TokenService from "./token.service";

export const register = async (
  firstName: string,
  lastName: string,
  email: string,
  screenName: string,
  password: string,
  repassword: string
): Promise<[boolean, FieldError[] | null]> => {
  // call Login API
  let res: RegisterResponse = await FabricAPI.Auth.register(
    firstName,
    lastName,
    email,
    screenName,
    password,
    repassword
  );

  // TOOD: check for failure
  if (res.errors) return [false, res.errors];

  // update redux
  store.dispatch({
    type: Actions.AuthActions.SET_TOKENS,
    payload: { token: res.accessToken, refreshToken: res.refreshToken },
  });

  // set boolean that user is logged in
  store.dispatch({
    type: Actions.MeActions.LOGGED_IN,
  });

  // update secure storage
  TokenService.setRefreshToken(res.refreshToken);

  // request me info
  return await MeService.getMe();
};

export const login = async (
  email: string,
  password: string
): Promise<[boolean, FieldError[] | null]> => {
  // call Login API
  let res: LoginResponse = await FabricAPI.Auth.login(email, password);

  // TOOD: check for failure
  if (res.errors) return [false, res.errors];

  // update redux
  store.dispatch({
    type: Actions.AuthActions.SET_TOKENS,
    payload: { token: res.accessToken, refreshToken: res.refreshToken },
  });

  // set boolean that user is logged in
  store.dispatch({
    type: Actions.MeActions.LOGGED_IN,
  });

  // update secure storage
  TokenService.setRefreshToken(res.refreshToken);

  // request me info
  return await MeService.getMe();
};

export const logout = () => {
  // increment refresh token version in DB
  FabricAPI.Auth.logout();

  // clear redux store
  TokenService.clearTokens();
};

import { BannerAPI } from "../api";
import { FieldError, LoginResponse, RegisterResponse } from "../types";
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
  let res: RegisterResponse = await BannerAPI.Auth.register(
    firstName,
    lastName,
    email,
    screenName,
    password,
    repassword
  );

  // TOOD: check for failure
  if (res.errors) return [false, res.errors];

  if (!res.accessToken || !res.refreshToken) return [false, null];

  // update store token in redus and secure storage
  TokenService.setTokens(res.accessToken, res.refreshToken);

  // set boolean that user is logged in
  store.dispatch({
    type: Actions.MeActions.LOGGED_IN,
  });

  // request me info
  return await MeService.getMe();
};

export const login = async (
  email: string,
  password: string
): Promise<[boolean, FieldError[] | null]> => {
  // call Login API
  let res: LoginResponse = await BannerAPI.Auth.login(email, password);

  // TOOD: check for failure
  if (res.errors) return [false, res.errors];

  if (!res.accessToken || !res.refreshToken) return [false, null];

  // update store token in redus and secure storage
  TokenService.setTokens(res.accessToken, res.refreshToken);

  // request me info after login
  const [meRes, meErrors] = await MeService.getMe();

  if (!meRes) return [false, null];

  // set boolean the login process to complete to signal app to switch navigators
  store.dispatch({
    type: Actions.AuthActions.COMPLETE_LOGIN,
  });

  return [true, null];
};

export const logout = () => {
  // increment refresh token version in DB
  BannerAPI.Auth.logout();

  // clear redux store
  TokenService.clearTokens();
};

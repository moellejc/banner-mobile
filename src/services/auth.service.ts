import * as SecureStore from "expo-secure-store";
import { decode } from "jsonwebtoken";
import { FabricAPI } from "../api";
import {
  FieldError,
  LoginResponse,
  RegisterResponse,
} from "../graphql/generator/FabricGQLTypes";
import { Actions, store } from "../state";
import { Services } from "./";

const TOKEN_REFRESH_KEY = "fabric-jwt_refresh_token";

const setRefreshToken = async (token: string) => {
  await SecureStore.setItemAsync(TOKEN_REFRESH_KEY, token);
};

export const getRefreshToken = (): string => {
  //   return await SecureStore.getItemAsync(TOKEN_REFRESH_KEY);
  return store.getState().auth.refreshToken;
};

export const getAccessToken = (): string => {
  return store.getState().auth.token;
};

export const isRefreshValid = async (): Promise<boolean> => {
  const refreshToken = await getRefreshToken();

  if (!refreshToken) return false;

  // confirm token is valid
  let { exp }: any = decode(refreshToken);

  if (Date.now() >= exp * 1000) return false;

  return true;
};

export const isAccessValid = () => {
  let authState = store.getState();
  const accessToken = authState.auth.token;

  if (!accessToken) return false;

  // confirm token is valid
  let { exp }: any = decode(accessToken);

  if (Date.now() >= exp * 1000) return false;

  return true;
};

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
  setRefreshToken(res.refreshToken);

  // request me info
  return await Services.MeService.getMe();
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
  setRefreshToken(res.refreshToken);

  // request me info
  return await Services.MeService.getMe();
};

// TODO: Update with fetch http call instead of graphql
// export const refreshAccessToken = async (): Promise<
//   [boolean, FieldError[] | null]
// > => {
//   // make API call
//   const res = await FabricAPI.Auth.refreshAccessToken();

//   // TODO: check for failures
//   if (res.errors) return [false, res.errors];

//   // update access token in the store
//   updateAccessToken(res.accessToken);

//   return [true, null];
// };

export const updateAccessToken = (newAccessToken: string) => {
  store.dispatch({
    type: Actions.AuthActions.SET_ACCESS_TOKEN,
    payload: { token: newAccessToken },
  });
};

export const logout = () => {
  // increment refresh token version in DB
  FabricAPI.Auth.logout();

  // clear redux store
  store.dispatch({
    type: Actions.MeActions.LOGOUT,
  });
  store.dispatch({
    type: Actions.AuthActions.CLEAR_TOKENS,
  });

  // clear secure storage locations
  SecureStore.deleteItemAsync(TOKEN_REFRESH_KEY);
};

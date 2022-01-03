import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";
import * as TokenAPI from "../api/token.api";
import { Actions, store } from "../state";

// Secure Storage Keys
const TOKEN_REFRESH_KEY = "banner-jwt_refresh_token";

export const setTokens = (accessToken: string, refreshToken: string) => {
  store.dispatch({
    type: Actions.AuthActions.SET_TOKENS,
    payload: { token: accessToken, refreshToken: refreshToken },
  });

  // update storage
  setRefreshTokenInStorage(refreshToken);
};

export const setRefreshToken = (token: string) => {
  store.dispatch({
    type: Actions.AuthActions.SET_REFRESH_TOKEN,
    payload: { token },
  });

  setRefreshTokenInStorage(token);
};

export const setRefreshTokenInStorage = async (token: string) => {
  await SecureStore.setItemAsync(TOKEN_REFRESH_KEY, token);
};

export const getRefreshToken = (): string => {
  return store.getState().auth.refreshToken;
};

export const getRefreshTokenFromStorage = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync(TOKEN_REFRESH_KEY);
};

export const getAccessToken = (): string => {
  return store.getState().auth.token;
};

const isTokenValid = (token: string): boolean => {
  let { exp }: any = jwt_decode(token, { header: true });

  if (Date.now() >= exp * 1000) return false;

  return true;
};

export const isRefreshValid = (): boolean => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) return false;

  // confirm token is valid
  return isTokenValid(refreshToken);
};

export const isRefreshValidFromStorage = async (): Promise<boolean> => {
  const refreshToken = (await getRefreshTokenFromStorage()) as string;

  if (!refreshToken) return false;

  // confirm token is valid
  return isTokenValid(refreshToken);
};

export const isAccessValid = () => {
  const accessToken = getAccessToken();

  if (!accessToken) return false;

  // confirm token is valid
  return isTokenValid(accessToken);
};

export const refreshAccessToken = async (): Promise<boolean> => {
  console.log("refreshing access token");
  const res = await TokenAPI.refreshAccessToken(
    getAccessToken(),
    getRefreshToken()
  );

  console.log(`access token response: ${res}`);

  if (!res.ok) {
    // refersh failed so clear all token locally and logout
    clearTokens();

    return false;
  }

  // get access token and update in app
  updateAccessToken(
    await res.json().then((data) => data.accessToken as string)
  );

  return true;
};

export const updateAccessToken = (newAccessToken: string) => {
  store.dispatch({
    type: Actions.AuthActions.SET_ACCESS_TOKEN,
    payload: { token: newAccessToken },
  });
};

export const restore = async (): Promise<boolean> => {
  const refreshToken = await getRefreshTokenFromStorage();

  if (!refreshToken) return false;

  setRefreshToken(refreshToken);

  return true;
};

export const clearTokens = () => {
  // clear redux store
  store.dispatch({
    type: Actions.MeActions.LOGOUT,
  });
  store.dispatch({
    type: Actions.AuthActions.CLEAR_TOKENS,
  });

  // clear secure storage locations
  SecureStore.deleteItemAsync(TOKEN_REFRESH_KEY);

  return;
};

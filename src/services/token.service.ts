import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";
import * as TokenAPI from "../api/token.api";
import { Actions, store } from "../state";

const TOKEN_REFRESH_KEY = "fabric-jwt_refresh_token";

export const setRefreshToken = async (token: string) => {
  await SecureStore.setItemAsync(TOKEN_REFRESH_KEY, token);
};

export const getRefreshToken = (): string => {
  //   return await SecureStore.getItemAsync(TOKEN_REFRESH_KEY);
  return store.getState().auth.refreshToken;
};

export const getRefreshTokenFromStorage = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync(TOKEN_REFRESH_KEY);
};

export const getAccessToken = (): string => {
  return store.getState().auth.token;
};

export const isRefreshValid = async (): Promise<boolean> => {
  let refreshToken = getRefreshToken();

  if (!refreshToken) {
    refreshToken = (await getRefreshTokenFromStorage()) as string;
    if (!refreshToken) return false;
  }

  // confirm token is valid
  let { exp }: any = jwt_decode(refreshToken, { header: true });

  if (Date.now() >= exp * 1000) return false;

  return true;
};

export const isAccessValid = () => {
  let authState = store.getState();
  const accessToken = authState.auth.token;

  if (!accessToken) return false;

  // confirm token is valid
  let { exp }: any = jwt_decode(accessToken, { header: true });

  // check date in miliseconds
  if (Date.now() >= exp * 1000) return false;

  return true;
};

export const refreshAccessToken = async (): Promise<boolean> => {
  const res = await TokenAPI.refreshAccessToken(
    getAccessToken(),
    getRefreshToken()
  );

  if (!res.ok) return false;

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

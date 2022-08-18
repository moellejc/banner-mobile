import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";
import * as TokenAPI from "../api/token.api";
import * as HereMapsAPI from "../api/heremaps.api";
import { Actions, store } from "../state";

// Secure Storage Keys
const TOKEN_REFRESH_KEY = "banner-jwt_refresh_token";
const TOKEN_HERE_MAPS_KEY = "banner-heremaps-jwt_token";

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

/**
 *
 * HereMaps Token functions
 *
 */

export const refreshHereMapsAccessToken = async (): Promise<boolean> => {
  const res = await HereMapsAPI.getAccessToken();

  // here maps request failed
  if (!res) {
    return false;
  }

  // get access token and update in app
  setHereMapsAccessToken(
    await res.data.json().then((data: any) => data.accessToken as string)
  );

  return true;
};

export const setHereMapsAccessToken = (newAccessToken: string) => {
  store.dispatch({
    type: Actions.AuthActions.SET_HERE_MAPS_TOKEN,
    payload: { token: newAccessToken },
  });

  // save in secure storage
  setHereMapsTokenInStorage(newAccessToken);
};

export const setHereMapsTokenInStorage = async (token: string) => {
  await SecureStore.setItemAsync(TOKEN_HERE_MAPS_KEY, token);
};

export const getHereMapsAccessToken = (): string => {
  return store.getState().auth.token;
};

export const getHereMapsTokenFromStorage = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync(TOKEN_HERE_MAPS_KEY);
};

const isHereMapsTokenValid = (token: string): boolean => {
  let { exp }: any = jwt_decode(token, { header: true });

  if (Date.now() >= exp * 1000) return false;

  return true;
};

export const isHereMapsAccessValid = () => {
  const accessToken = getHereMapsAccessToken();

  if (!accessToken) return false;

  // confirm token is valid
  return isHereMapsTokenValid(accessToken);
};

/**
 *
 * State and storage functions
 *
 */

export const restore = async (): Promise<boolean> => {
  await restoreBannerTokens();
  await restoreHereMapsToken();

  return true;
};

export const restoreBannerTokens = async (): Promise<boolean> => {
  const refreshToken = await getRefreshTokenFromStorage();

  if (refreshToken) {
    if (await isRefreshValid()) {
      console.log("On Load Refresh Access Token");
      setRefreshToken(refreshToken);
      const res = await refreshAccessToken();

      // if refresh was sucessful go to feed
      if (!res) {
        console.log("refresh access token failed");
        return false;
      }
      return true;
    }
  }

  return false;
};

export const restoreHereMapsToken = async (): Promise<boolean> => {
  const hereMapsToken = await getHereMapsTokenFromStorage();

  // pulled token from storage. now check if its valid
  if (hereMapsToken && isHereMapsTokenValid(hereMapsToken)) {
    setHereMapsAccessToken(hereMapsToken);
    return true;
  }

  // request a new token
  return await refreshHereMapsAccessToken();
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

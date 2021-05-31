import { action } from "typesafe-actions";
import { AuthActions } from "../constants";

export const setTokens = (token: string, refreshToken: string) =>
  action(AuthActions.SET_TOKENS, { token, refreshToken });

export const clearToken = () => action(AuthActions.CLEAR_TOKENS, {});

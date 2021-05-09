import { action } from "typesafe-actions";
import { AuthActions } from "../constants";

export const setToken = (token: string) =>
  action(AuthActions.SET_TOKEN, { token });

export const clearToken = () => action(AuthActions.CLEAR_TOKEN, {});

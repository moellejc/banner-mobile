import { action } from "typesafe-actions";
import { authConstants } from "../../constants/state";

export const setToken = (token: string) =>
  action(authConstants.SET_TOKEN, { token });

export const clearToken = () => action(authConstants.CLEAR_TOKEN, {});

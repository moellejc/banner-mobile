import { action } from "typesafe-actions";
import { userConstants } from "../../constants/state/user.constants";
import { User } from "../../types/User";

export const register = (user: User, token: string) =>
  action(userConstants.REGISTER_REQUEST, { user, token });

export const login = (user: User, token: string) =>
  action(userConstants.LOGIN_REQUEST, { user, token });

export const logout = () => action(userConstants.LOGOUT, {});

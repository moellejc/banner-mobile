import { action } from "typesafe-actions";
import { meConstants } from "../../constants/state";
import { User } from "../../types/User";

export const register = (user: User) => action(meConstants.REGISTER, { user });

export const login = (user: User) => action(meConstants.LOGIN, { user });

export const setLocation = (user: User) =>
  action(meConstants.SET_LOCATION, { user });

export const logout = () => action(meConstants.LOGOUT, {});

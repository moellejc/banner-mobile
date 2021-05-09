import { action } from "typesafe-actions";
import { User } from "../../types/User";
import { MeActions } from "../constants";

export const register = (user: User) => action(MeActions.REGISTER, { user });

export const login = (user: User) => action(MeActions.LOGIN, { user });

export const setLocation = (user: User) =>
  action(MeActions.SET_LOCATION, { user });

export const logout = () => action(MeActions.LOGOUT, {});

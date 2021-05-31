import { logout, setToken } from "../../services/auth";
import { AuthActions } from "../constants";

export interface IAuthState {
  token: string;
  refreshToken: string;
  isLoggedIn: boolean;
  loginComplete: boolean;
}

const initialAuthState: IAuthState = {
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  loginComplete: false,
};

export function authReducer(state = initialAuthState, action: any) {
  switch (action.type) {
    case AuthActions.SET_TOKENS:
      setToken(action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case AuthActions.COMPLETE_LOGIN:
      return {
        ...state,
        loginComplete: true,
      };
    case AuthActions.CLEAR_TOKENS:
      logout();
      return {
        token: "",
        isLoggedIn: false,
        loginComplete: false,
      };
    default:
      return state;
  }
}

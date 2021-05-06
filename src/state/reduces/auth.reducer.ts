import { authConstants } from "../../constants/state";
import { logout, setToken } from "../../services/auth";

export interface IAuthState {
  token: string;
  isLoggedIn: boolean;
  loginComplete: boolean;
}

const initialAuthState: IAuthState = {
  token: "",
  isLoggedIn: false,
  loginComplete: false,
};

export function authReducer(state = initialAuthState, action: any) {
  switch (action.type) {
    case authConstants.SET_TOKEN:
      setToken(action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case authConstants.COMPLETE_LOGIN:
      return {
        ...state,
        loginComplete: true,
      };
    case authConstants.CLEAR_TOKEN:
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

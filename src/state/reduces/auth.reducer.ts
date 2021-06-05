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
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        isLoggedIn: true,
      };
    case AuthActions.COMPLETE_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        loginComplete: true,
      };
    case AuthActions.CLEAR_TOKENS:
      return initialAuthState;
    default:
      return state;
  }
}

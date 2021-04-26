import { authConstants } from "../../constants/state";
import { setToken } from "../../services/auth";

interface AuthState {
  token: string;
}

const initialAuthState: AuthState = {
  token: "",
};

export function authReducer(state = initialAuthState, action: any) {
  switch (action.type) {
    case authConstants.SET_TOKEN:
      console.log(action);
      setToken(action.payload.token);
      return {
        token: action.payload.token,
      };
    case authConstants.CLEAR_TOKEN:
      return {
        token: "",
      };
    default:
      return state;
  }
}

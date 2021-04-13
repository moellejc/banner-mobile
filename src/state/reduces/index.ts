import { combineReducers } from "redux";
import { authReducer as auth } from "./auth.reducer";
import { userReducer as user } from "./user.reducer";

const rootReducer = combineReducers({
  auth,
  user,
});

export default rootReducer;

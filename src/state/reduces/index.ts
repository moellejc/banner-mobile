import { combineReducers } from "redux";
import { authReducer as auth } from "./auth.reducer";
import { meReducer as me } from "./me.reducer";

const rootReducer = combineReducers({
  auth,
  me,
});

export default rootReducer;

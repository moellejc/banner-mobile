import { combineReducers } from "redux";
import { authReducer as auth } from "./auth.reducer";
import { currentPlaceReducer as currentPlace } from "./currentplace.reducer";
import { meReducer as me } from "./me.reducer";

const rootReducer = combineReducers({
  auth,
  me,
  currentPlace,
});

export default rootReducer;

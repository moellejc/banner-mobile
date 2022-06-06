import { combineReducers } from "redux";
import { authReducer as auth } from "./auth.reducer";
import { placesReducer as places } from "./places.reducer";
import { meReducer as me } from "./me.reducer";

const rootReducer = combineReducers({
  auth,
  me,
  places,
});

export default rootReducer;

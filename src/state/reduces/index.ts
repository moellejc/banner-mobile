import { combineReducers } from "redux";
import { authReducer as auth } from "./auth.reducer";
import { placesReducer as places } from "./places.reducer";
import { meReducer as me } from "./me.reducer";
import { hubReducer as hub } from "./hub.reducer";

const rootReducer = combineReducers({
  auth,
  me,
  hub,
  places,
});

export default rootReducer;

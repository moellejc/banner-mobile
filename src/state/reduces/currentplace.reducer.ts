import { Place } from "../../types/Place";
import { CurrentPlaceActions } from "../constants";

export interface IPlaceState {
  place: Place;
}

const initialPlaceState: IPlaceState = {
  place: {
    id: "",
    title: "",
    address: "",
    location: null,
    menu_options: ["Feed", "check-in", "order"],
  },
};

export function currentPlaceReducer(state = initialPlaceState, action: any) {
  switch (action.type) {
    case CurrentPlaceActions.INFO:
      return {
        ...state,
      };
    case CurrentPlaceActions.UPDATE_FEED:
      return {
        ...state,
      };
    case CurrentPlaceActions.UPDATE_PEOPLE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

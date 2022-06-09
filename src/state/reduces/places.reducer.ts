import { Place, CollapseStates } from "../../types";
import { PlacesActions } from "../actions";

export interface IPlacesState {
  currentPlace: Place;
  headerState: CollapseStates;
}

const initialPlacesState: IPlacesState = {
  currentPlace: {
    id: "",
    title: "",
    address: "",
    location: null,
    menu_options: ["Feed", "check-in", "order"],
  },
  headerState: CollapseStates.Expanded,
};

export function placesReducer(state = initialPlacesState, action: any) {
  switch (action.type) {
    case PlacesActions.INFO:
      return {
        ...state,
      };
    case PlacesActions.UPDATE_FEED:
      return {
        ...state,
      };
    case PlacesActions.UPDATE_PEOPLE:
      return {
        ...state,
      };
    case PlacesActions.TRANSITION_HEADER_COLLAPSE:
      return {
        currentPlace: {
          ...state.currentPlace,
        },
        headerState: CollapseStates.Collapsed,
      };
    case PlacesActions.TRANSITION_HEADER_EXPAND:
      return {
        currentPlace: {
          ...state.currentPlace,
        },
        headerState: CollapseStates.Expanded,
      };
    default:
      return state;
  }
}

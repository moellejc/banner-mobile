import { Place, CollapseStates, PlaceScreens } from "../../types";
import { PlacesActions } from "../actions";

export interface IPlacesState {
  currentPlace: Place;
  headerState: CollapseStates;
  hierarchyState: CollapseStates;
  goToPlaceScreen: PlaceScreens | null;
  placeScreen: PlaceScreens;
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
  hierarchyState: CollapseStates.Collapsed,
  goToPlaceScreen: null,
  placeScreen: PlaceScreens.Content,
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
        ...state,
        currentPlace: {
          ...state.currentPlace,
        },
        headerState: CollapseStates.Collapsed,
      };
    case PlacesActions.TRANSITION_HEADER_EXPAND:
      return {
        ...state,
        currentPlace: {
          ...state.currentPlace,
        },
        headerState: CollapseStates.Expanded,
      };
    case PlacesActions.TRANSITION_HIERARCHY_COLLAPSE:
      return {
        ...state,
        currentPlace: {
          ...state.currentPlace,
        },
        hierarchyState: CollapseStates.Collapsed,
      };
    case PlacesActions.TRANSITION_HIERARCHY_EXPAND:
      return {
        ...state,
        currentPlace: {
          ...state.currentPlace,
        },
        hierarchyState: CollapseStates.Expanded,
      };
    case PlacesActions.NAV_TOGO_PLACE_SCREEN_START:
      return {
        ...state,
        currentPlace: {
          ...state.currentPlace,
        },
        goToPlaceScreen: action.payload.goToPlaceScreen,
      };
    case PlacesActions.NAV_TOGO_PLACE_SCREEN_END:
      return {
        ...state,
        currentPlace: {
          ...state.currentPlace,
        },
        goToPlaceScreen: null,
      };
    default:
      return state;
  }
}

import { CollapseStates, PlaceScreens, VisibilityStates } from "../../types";
import { Place } from "../../tests/data";
import { PlacesActions } from "../actions";

export interface IPlacesState {
  currentPlace: Place;
  goToPlaceScreen: PlaceScreens | null;
  placeScreen: PlaceScreens;
  titleState: VisibilityStates;
}

const initialPlacesState: IPlacesState = {
  currentPlace: {
    id: "",
    name: "",
    placeType: "",
    placeCategory: "",
    services: [],
    totalPeople: 0,
    totalFavorites: 0,
    coverImageURL: "",
  },
  titleState: VisibilityStates.Visible,
  goToPlaceScreen: null,
  placeScreen: PlaceScreens.Content,
};

export function placesReducer(state = initialPlacesState, action: any) {
  switch (action.type) {
    case PlacesActions.UPDATE_CURRENT_PLACE:
      return {
        ...state,
        currentPlace: action.payload,
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
    case PlacesActions.HEADER_TITLE_VISIBLE:
      return {
        ...state,
        currentPlace: {
          ...state.currentPlace,
        },
        titleState: VisibilityStates.Visible,
      };
    case PlacesActions.HEADER_TITLE_HIDDEN:
      return {
        ...state,
        currentPlace: {
          ...state.currentPlace,
        },
        titleState: VisibilityStates.Hidden,
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

import { HubActions } from "../actions";
import { HubScreens } from "../../types";

export interface IHubState {
  hubScreen: HubScreens;
  toGoScreen: HubScreens | null;
}

const initialHubState: IHubState = {
  hubScreen: HubScreens.Place,
  toGoScreen: null,
};

export function hubReducer(state = initialHubState, action: any) {
  switch (action.type) {
    case HubActions.UPDATE_DISPLAYED_SCREEN:
      return {
        ...state,
        hubScreen: action.payload.hubScreen,
      };
    case HubActions.NAV_TOGO_SCREEN_START:
      console.log(`Hub Start Action: ${action}`);
      return {
        ...state,
        toGoScreen: action.payload.goToScreen,
      };
    case HubActions.NAV_TOGO_SCREEN_END:
      return {
        ...state,
        toGoScreen: null,
      };
    default:
      return state;
  }
}

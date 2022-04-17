import * as Location from "expo-location";
import { number } from "yup/lib/locale";
import { LocationActions } from "../constants";

export interface ILocationState {
  current: Location.LocationObject;
}

const initialLocationState: ILocationState = {
  current: {
    coords: {
      latitude: Number.NEGATIVE_INFINITY,
      longitude: Number.NEGATIVE_INFINITY,
      altitude: null,
      accuracy: null, // The radius of uncertainty for the location, measured in meters
      altitudeAccuracy: null, // The accuracy of the altitude value, in meters
      heading: null,
      speed: null,
    },
    timestamp: -1,
  },
};

export function locationReducer(state = initialLocationState, action: any) {
  switch (action.type) {
    case LocationActions.UPDATE_CURRENT:
      return {
        ...state,
      };
    case LocationActions.CLEAR:
      return initialLocationState;
    default:
      return state;
  }
}

import { BannerAPI } from "../api";
import { Actions, store } from "../state";
import * as Location from "expo-location";
import { current } from "immer";

export const getCurrentLocation = async (): Promise<
  Location.LocationObject | undefined
> => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission to access location was denied");
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  return location;
};

export const storeLocation = (location: Location.LocationObject): undefined => {
  if (!location) return;

  //TODO: replace with location storage
  store.dispatch({
    type: Actions.MeActions.SET_USER_DATA,
    payload: { user: "" },
  });
};

export const trackCurrentLocation = async (): Promise<undefined> => {
  let location = await getCurrentLocation();
  if (location) storeLocation(location);
  return;
};

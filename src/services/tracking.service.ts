import { BannerAPI } from "../api";
import * as Location from "expo-location";
import * as LocationService from "./location.service";
import * as PlaceService from "./place.service";

let TRACKING_DELAY_INTERVAL = 5000;

export const trackUserForeground = async (): Promise<undefined> => {
  while (true) {
    await LocationService.trackCurrentLocation();
    await PlaceService.trackCurrentPlace();
    await new Promise((f) => setTimeout(f, TRACKING_DELAY_INTERVAL));
  }

  return;
};

import { BannerAPI } from "../api";
import * as LocationService from "./location.service";
import * as PlaceService from "./place.service";
// @ts-ignore
import { APP_ENV } from "@env";

export const startTracking = async (): Promise<void> => {
  if (APP_ENV == "DEV") {
    LocationService.requestForegroundLocationPermission();
    LocationService.startForegroundTracking();
  } else {
    LocationService.requestBackgroundLocationPermission();
    LocationService.createBackgroundLocationTask();
    LocationService.startBackgroundTracking();
  }
};

export const stopTracking = async (): Promise<void> => {
  if (APP_ENV == "DEV") {
    LocationService.stopForegroundTracking();
  } else {
    LocationService.stopBackgroundTracking();
  }
};

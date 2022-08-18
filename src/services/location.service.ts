import { BannerAPI } from "../api";
import { Actions, store } from "../state";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import axios from "axios";
import { DateTime } from "luxon";

const LOCATION_TASK_NAME = "BANNER_BACKGROUND_LOCATION_TASK";
let foregroundSubscription: Location.LocationSubscription;

interface BackgroundLocationResponse {
  locations: [Location.LocationObject];
}

export const requestForegroundLocationPermission =
  async (): Promise<Location.LocationPermissionResponse> => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission;
  };

export const requestBackgroundLocationPermission =
  async (): Promise<Location.LocationPermissionResponse> => {
    const permission = await Location.requestBackgroundPermissionsAsync();
    return permission;
  };

// Define the background task for location tracking
export const createBackgroundLocationTask = () => {
  TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      // Extract location coordinates from data
      const { locations } = data as BackgroundLocationResponse;
      const location = locations[0];
      if (location) {
        console.log("Location it in background", location.coords);
        storeLocation(location);
      }
    }
  });
};

// Start location tracking in foreground
export const startForegroundTracking = async () => {
  // Check if foreground permission is granted
  const { granted } = await Location.getForegroundPermissionsAsync();
  if (!granted) {
    console.log("foreground location tracking denied");
    return;
  }

  // Make sure that foreground location tracking is not running
  foregroundSubscription?.remove();

  // Start watching position in real-time
  foregroundSubscription = await Location.watchPositionAsync(
    {
      // For better logs, we set the accuracy to the most sensitive option
      accuracy: Location.Accuracy.BestForNavigation,
      distanceInterval: 5,
    },
    async (location) => {
      let existingLat = store.getState().loc.current.coords.latitude;
      let existingLon = store.getState().loc.current.coords.longitude;
      let prevCoordDist = haversinesDist(
        location.coords.latitude,
        location.coords.longitude,
        existingLat,
        existingLon
      );

      if (
        prevCoordDist < 10 &&
        !(
          existingLat === Number.NEGATIVE_INFINITY ||
          existingLon === Number.NEGATIVE_INFINITY
        )
      )
        return;

      // reverse geocode
      let addressRes = await BannerAPI.HereMaps.reverseGeocode(
        location.coords.latitude,
        location.coords.longitude
      );

      // reverse geocode request failed
      if (addressRes?.status != 200) return;

      // extract address
      if (addressRes.data.items.length > 0) {
        storeLocation(location);
        store.dispatch({
          type: Actions.LocationActions.UPDATE_CURRENT_TITLE,
          payload: `Lat: ${location.coords.latitude}\nLon: ${
            location.coords.longitude
          } \nTime: ${DateTime.now()
            .setZone("America/New_York")
            .toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}\n${
            addressRes.data.items[0].title
          }`,
        });
      }
    }
  );
};

// Stop location tracking in foreground
export const stopForegroundTracking = () => {
  foregroundSubscription?.remove();
};

// Start location tracking in background
export const startBackgroundTracking = async () => {
  // Don't track position if permission is not granted
  const { granted } = await Location.getBackgroundPermissionsAsync();
  if (!granted) {
    console.log("background location tracking denied");
    return;
  }

  // Make sure the task is defined otherwise do not start tracking
  const isTaskDefined = await TaskManager.isTaskDefined(LOCATION_TASK_NAME);
  if (!isTaskDefined) {
    console.log("Task is not defined");
    return;
  }

  // Don't track if it is already running in background
  const hasStarted = await Location.hasStartedLocationUpdatesAsync(
    LOCATION_TASK_NAME
  );
  if (hasStarted) {
    console.log("Already started");
    return;
  }

  await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
    // For better logs, we set the accuracy to the most sensitive option
    accuracy: Location.Accuracy.BestForNavigation,
    // Make sure to enable this notification if you want to consistently track in the background
    showsBackgroundLocationIndicator: true,
    foregroundService: {
      notificationTitle: "Location",
      notificationBody: "Location tracking in background",
      notificationColor: "#fff",
    },
  });
};

// Stop location tracking in background
export const stopBackgroundTracking = async () => {
  const hasStarted = await Location.hasStartedLocationUpdatesAsync(
    LOCATION_TASK_NAME
  );
  if (hasStarted) {
    await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
    console.log("Location tacking stopped");
  }
};

export const storeLocation = (location: Location.LocationObject) => {
  if (!location) return;

  store.dispatch({
    type: Actions.LocationActions.UPDATE_CURRENT,
    payload: location,
  });
};

// expires 8/2/2022 3:30PM
let HERE_JWT =
  "eyJhbGciOiJSUzUxMiIsImN0eSI6IkpXVCIsImlzcyI6IkhFUkUiLCJhaWQiOiJSTk12QVc0SzQ2Zk8yY2QxNWpmSiIsImlhdCI6MTY1OTI5NTA4OSwiZXhwIjoxNjU5MzgxNDg5LCJraWQiOiJqMSJ9.ZXlKaGJHY2lPaUprYVhJaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuLjZDWUs2TjRxNU1ueHpBMkVJTlpLMlEuWDV3RW5pcER6M1RqMHByOXdNbTVlM1lhNDN1TVZEd21tN2ljVlRGekxYeC15ZW5aM3NObXhvc0R4d2k4bDhma01DQng1enh3UFFNYWlZS3B1YlVPWUdxWkdmajRBSE90bHJaOGpIX1pab0lnVW9zSUEtdGl4UFo3S004MkRNWlFKS05LRUZMOGgtbnJIOEU0Zk9FcjlFR0E1Nlh4WTkyVXIwQW1IdzM1dXp2YlpoOUVfV3RMNjBuZTR5SzA5aHlhNjlBWjAtX2JpWThfdkI0OFFUWUFla2M2aVhfcHZaeXFCOEVtRTlWQUxwUS5WNkt4VGxwb0MwTWdPNFQzeG1mNnhJMlZFUWd1dEI4RmtHblJKV3R1V1Zj.Fk_iQSdwFGcjSPP6-1v1Izoeg0SIJkPLx2Z4q8QLS8HN1uMpm9LiOZiJAfel43pvfcMB8EffyUvIugJFT-pzTa-0TCF-dy5Fdv9on90yOacUBwjgS0hQz7wfdLUGQD3IhHtylDXuc1zAjjG9zGyj3K3jlUCyJpe-Img6dyNCJ4XXXausYqUNvbGvk8vw06A6gtwBRMv72J5vEaEJkLJRMRHBzzHS5qUgEaz85BcQYc7MmAUHBiietzg-o8zqd87u7xZCl8HdnqUiih6kMINHJ6mUx7rZ_tFizGeO18j3LI_KGb8o9RQTg1zKlSJXmSa0npULQMU-fzPd2GvaYTQQrQ";

const haversinesDist = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in metres
};

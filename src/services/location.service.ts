import { BannerAPI } from "../api";
import { Actions, store } from "../state";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { current } from "immer";

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
    },
    (location) => {
      console.log(location.coords);
      storeLocation(location);
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

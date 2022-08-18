import { Place } from "../types/Place";
import * as Location from "expo-location";

export const getPlaceByLocation = async (
  location: Location.LocationObject
): Promise<Place> => {
  let placeHolder = {
    id: "7987987n98n983c4",
    title: "Joe's Test Place",
    address: "7740 Tyler's Valley Dr, West Chester, OH 45069",
    location: {
      lon: 1,
      lat: 2,
    },
    menu_options: ["Option 1", "Option 2"],
  };

  return placeHolder;
};

export const getPlaceByAddress = async (): Promise<undefined> => {
  return;
};

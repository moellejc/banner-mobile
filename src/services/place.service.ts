import { BannerAPI } from "../api";
import { PlaceMenuData } from "../components/molecules/PlaceMenu";
import { store } from "../state";
import { Place } from "../types/Place";
import * as Location from "expo-location";

export const getCurrentPlace = (): Place => {
  let currentPlace: Place = store.getState().currentPlace.place;

  return currentPlace;
};

export const trackCurrentPlace = async (): Promise<undefined> => {
  // let currentPlace: Place = await BannerAPI.Place.getPlaceByLocation(location);

  return;
};

export const getCurrentPlaceOptions = (): PlaceMenuData[] => {
  return getCurrentPlace().menu_options.map((i) => ({
    key: i,
    title: i,
    page: i,
  }));
};

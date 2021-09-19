import { PlaceMenuData } from "../components/molecules/PlaceMenu";
import { store } from "../state";
import { Place } from "../types/Place";

export const getCurrentPlace = (): Place => {
  let currentPlace: Place = store.getState().currentPlace.place;

  return currentPlace;
};

export const getCurrentPlaceOptions = (): PlaceMenuData[] => {
  return getCurrentPlace().menu_options.map((i) => ({
    key: i,
    title: i,
    page: i,
  }));
};

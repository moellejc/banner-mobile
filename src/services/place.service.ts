import { store } from "../state";
import { Place } from "../types/Place";

export const getCurrentPlace = (): Place => {
  let currentPlace: Place = store.getState().currentPlace.place;

  return currentPlace;
};

export const getCurrentPlaceOptions = (): string[] => {
  return getCurrentPlace().menu_options;
};

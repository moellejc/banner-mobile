import { Coordinates } from "./Coordinates";

export type Place = {
  id: string;
  title: string;
  address: string;
  location: Coordinates | null;
  services: string[];
  sectionOrder: string[];
  peopleHere: string[];
};

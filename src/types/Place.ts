import { Coordinates } from "./Coordinates";

export type Place = {
  id: string;
  title: string;
  address: string;
  location: Coordinates | null;
  menu_options: string[];
};

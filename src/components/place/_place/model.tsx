import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { height } = Dimensions.get("window");
const φ = (1 + Math.sqrt(5)) / 2;

export const MIN_HEADER_HEIGHT = 64 + Constants.statusBarHeight;
export const SCREEN_UNSAFE_MARGIN_TOP = 30;
export const COVER_IMG_TOP_MARGIN = 120;
export const COVER_IMG_HEIGHT = height * 0.45;
export const MAX_HEADER_HEIGHT = COVER_IMG_HEIGHT + COVER_IMG_TOP_MARGIN;
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

export interface IPlacePost {
  name: string;
  artist?: string;
}

export interface IPlace {
  name: string;
  artist: string;
  release: number;
  cover: number;
  tracks: IPlacePost[];
}

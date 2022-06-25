import { StyleSheet, Dimensions } from "react-native";
import {
  MIN_HEADER_HEIGHT,
  MAX_HEADER_HEIGHT,
  IPlace,
  SCREEN_UNSAFE_MARGIN_TOP,
  COVER_IMG_HEIGHT,
} from "../_place/model";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  scrollContainer: {
    position: "absolute",
    width: WINDOW_WIDTH - 20,
    height: WINDOW_HEIGHT,
    left: 10,
    top: 10,
  },
  placeContainer: {
    flex: 1,
    marginTop: SCREEN_UNSAFE_MARGIN_TOP,
    // backgroundColor: "orange",
  },
  cover: {
    height: MAX_HEADER_HEIGHT - SCREEN_UNSAFE_MARGIN_TOP,
    marginBottom: 10,
  },
  postContainer: {
    height: 100,
  },
  postText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

import { StyleSheet, Dimensions } from "react-native";
import { COVER_IMG_HEIGHT } from "../_place/model";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  backgroundContainer: {
    height: COVER_IMG_HEIGHT,
  },
  backgroundImage: {
    width: WINDOW_WIDTH - 20,
    marginBottom: 10,
    borderRadius: 20,
    height: "100%",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

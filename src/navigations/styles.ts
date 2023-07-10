import { StyleSheet, Dimensions } from "react-native";
import { SIDE_MARGIN, ICON_SIZE } from "./constants";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    shadowColor: "transparent",
  },
  leftIcon: {
    marginLeft: SIDE_MARGIN,
  },
  rightIcon: {
    marginRight: SIDE_MARGIN,
  },
});

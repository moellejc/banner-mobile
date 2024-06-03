import { StyleSheet, Dimensions } from "react-native";
import { SIDE_MARGIN, ICON_SIZE } from "./constants";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  contain: {
    marginLeft: SIDE_MARGIN,
    flexDirection: "row",
    alignItems: "center",
  },
  expandToText: {
    fontSize: 20,
  },
});

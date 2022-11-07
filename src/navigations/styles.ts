import { StyleSheet, Dimensions } from "react-native";
import { SIDE_MARGIN, ICON_SIZE } from "./constants";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    shadowColor: "transparent",
  },
  tabBar: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    borderTopWidth: 0,
  },
  tabBarBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabIcon: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
  tabIconCamera: {
    width: 55,
    height: 55,
  },
  leftIcon: {
    color: "black",
  },
  rightIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginRight: SIDE_MARGIN,
  },
});

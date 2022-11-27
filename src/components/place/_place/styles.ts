import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT - 120, // subtract height of bottom menu
    width: WINDOW_WIDTH,
    backgroundColor: "white",
  },
  scrollContainerPlace: {
    flexDirection: "column",
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    height: WINDOW_HEIGHT,
    backgroundColor: "white",
  },
  screen: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    flex: 1,
  },
});

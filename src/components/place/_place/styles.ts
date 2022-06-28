import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
    backgroundColor: "green",
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

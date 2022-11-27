import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  scrollContainer: {
    flexDirection: "row",
  },
  screen: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 120, // subtract height of the menu
    flex: 1,
  },
  screenText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  screenTemp: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

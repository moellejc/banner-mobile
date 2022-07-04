import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  secondaryTitle: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  primaryTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
});

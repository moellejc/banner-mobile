import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  secondaryTitle: {
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "800",
    color: "black",
    letterSpacing: 1,
  },
  primaryTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "black",
  },
});

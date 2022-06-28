import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    width: "100%",
    height: "100%",
  },
});

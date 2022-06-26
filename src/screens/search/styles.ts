import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    left: 20,
    top: 50,
    width: 30,
    height: 30,
  },
});

import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: WINDOW_HEIGHT - 10,
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
    backgroundColor: "black",
    zIndex: 100,
  },
  back: {
    position: "absolute",
    flexDirection: "column",
    bottom: 100,
    width: 100,
    height: 50,
    backgroundColor: "red",
  },
  backText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    marginBottom: 5,
  },
  downArrow: {
    flex: 1,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  downArrowIcon: {
    width: 30,
    height: 16,
    marginBottom: 15,
  },
});

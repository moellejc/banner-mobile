import { StyleSheet, Dimensions } from "react-native";
import { SIDE_MARGIN } from "./constants";

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
  },
  addressContainer: {
    flexDirection: "column",
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
    color: "black",
    bottom: 5,
  },
  addressRow: {
    fontSize: 18,
    color: "686868",
  },
  selectContainer: {
    marginLeft: "auto",
  },
  select: {
    fontSize: 24,
    fontWeight: "500",
    color: "#6D0A99",
  },
});

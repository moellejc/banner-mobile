import { StyleSheet, Dimensions } from "react-native";
import { SIDE_MARGIN, ICON_SIZE } from "./constants";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    // marginLeft: SIDE_MARGIN + ICON_SIZE + 10
    marginLeft: -40,
    // marginLeft: "auto",
    // marginRight: "auto",
    // height: 100,
    width: WINDOW_WIDTH - SIDE_MARGIN * 2 - ICON_SIZE,
    // backgroundColor: "red",
    alignItems: "center",
    flex: 1,
    verticalAlign: "middle",
    justifyContent: "center",
  },
  inputContainer: {
    // backgroundColor: "green",
  },
});

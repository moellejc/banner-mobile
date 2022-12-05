import { StyleSheet, Dimensions } from "react-native";
import { TITLE_TRANSITION_DIFFERNCE } from "./constants";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    height: 25,
  },
  titleContainer: {
    width: "100%",
    marginTop: TITLE_TRANSITION_DIFFERNCE,
  },
  titleTxt: {
    fontSize: 16,
    fontWeight: "bold",
    // textTransform: "uppercase",
  },
});

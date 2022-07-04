import { StyleSheet, Dimensions } from "react-native";
import { SECTION_PADDING_TOP } from "../constants";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: SECTION_PADDING_TOP,
  },
  postsList: {},
});

import { StyleSheet, Dimensions } from "react-native";
import { SECTION_PADDING_TOP } from "../constants";
import { ICON_SIZE } from "./constants";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: SECTION_PADDING_TOP,
  },
  servicesList: {
    // paddingTop: 10,
  },
  serviceContainer: {
    paddingLeft: 20,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceIconBG: {
    backgroundColor: "white",
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    borderColor: "black",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  serviceName: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});

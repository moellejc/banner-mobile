import { StyleSheet, Dimensions } from "react-native";
import { SECTION_PADDING_TOP } from "../constants";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: SECTION_PADDING_TOP,
  },
  servicesList: {
    paddingTop: 10,
  },
  serviceContainer: {
    paddingLeft: 20,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceIconBG: {
    backgroundColor: "black",
    width: 64,
    height: 64,
    borderRadius: 32,
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

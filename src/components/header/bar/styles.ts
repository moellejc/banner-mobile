import { StyleSheet } from "react-native";
import { BOTTOM_PLACE_PARENT_HEAD } from "./constants";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    backgroundColor: "white",
  },
  profileSmall: {
    position: "absolute",
    left: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  profileSmallIcon: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
  iconLeft: {
    position: "absolute",
    left: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  iconRight: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
  placeParent: {
    flexDirection: "column",
    position: "absolute",
    bottom: BOTTOM_PLACE_PARENT_HEAD,
    left: 40,
    right: 40,
  },
  placeParentNext: {
    flexDirection: "column",
    position: "absolute",
    bottom: -25,
  },
  upArrow: {
    flex: 1,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  upArrowIcon: {
    width: 30,
    height: 16,
    marginBottom: 15,
  },
  placeParentContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  placeParentIcon: {
    width: 24,
    height: 24,
  },
  placeParentText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    marginLeft: 5,
  },
  forward: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  forwardIcon: { width: "100%", height: "100%" },

  back: {
    position: "absolute",
    left: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  backIcon: { width: "100%", height: "100%" },
});

import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  headerContainer: {
    height: 100,
  },
  headerTitles: {},
  organizationTitle: {
    textTransform: "uppercase",
    color: "#9D9D9D",
    fontSize: 18,
  },
  title: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  hours: {
    color: "black",
    fontSize: 18,
    marginTop: 5,
  },
  actionMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 44,
  },
  actionMenuItem: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },
  actionMenuItemIcon: {
    width: 24,
    height: 24,
  },
  replaceHeaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    backgroundColor: "white",
  },
  reaplceTitle: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 10,
  },
});

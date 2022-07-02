import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: 30,
  },
  peopleList: {
    paddingTop: 10,
  },
  avatarContainer: {
    paddingLeft: 10,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  avatarName: {
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});

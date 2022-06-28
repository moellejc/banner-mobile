import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
  backgroundImgContainer: {
    width: "100%",
    height: WINDOW_HEIGHT * 0.4,
  },
  backgroundImgGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
  },
  headerInfoContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: -75,
  },
  headerInfoGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  titleContainer: {
    flexDirection: "column",
    marginTop: 75,
  },
  titleTxt: {
    fontWeight: "bold",
    fontSize: 32,
    color: "black",
  },
  categoryTxt: {
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
    color: "lightgray",
    marginTop: 5,
  },
  hoursTxt: {
    fontSize: 16,
    marginTop: 5,
  },
});

import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
  },
  contentContainer: {
    marginHorizontal: -10,
  },
  nearyByList: {
    width: "100%",
  },
});

export const stylesCard = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: WINDOW_WIDTH * 0.3,
    height: WINDOW_HEIGHT * 0.2,
    borderRadius: 10,
    marginLeft: 10,
    overflow: "hidden",
  },
  cardImageContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    marginTop: "auto",
  },
  titleTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 5,
    marginBottom: 5,
  },
});

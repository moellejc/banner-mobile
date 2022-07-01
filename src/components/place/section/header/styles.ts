import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: "100%",
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

  headerContentContainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: -75,
  },
  headerContentColumnsContainer: {
    flexDirection: "row",
  },
  headerInfoContainer: {
    flexDirection: "column",
  },
  headerInfoGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 75,
  },
  titleTxt: {
    fontWeight: "bold",
    fontSize: 32,
    color: "black",
  },
  mapIcon: {
    marginLeft: 10,
  },
  testBox: {
    backgroundColor: "black",
    width: 100,
    height: 32,
    marginLeft: "auto",
  },
  categoryContainer: {
    marginTop: 5,
  },
  categoryTxt: {
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
    color: "lightgray",
  },
  hoursContainer: {
    marginTop: 10,
  },
  hoursTxt: {
    fontSize: 16,
  },
  actionsContainer: {
    display: "flex",
    alignSelf: "flex-end",
    flexDirection: "column",
    marginLeft: "auto",
  },
  saveActionBtnContainer: {},
  actionBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  shareActionBtnContainer: {
    marginTop: 10,
  },
});

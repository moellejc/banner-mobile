import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  backgroundImgContainer: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 150,
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
    marginTop: -100,
    // height: 200 + 75, // account for -200 for image sixe and -75 for gradient margin
  },
  headerContentColumnsContainer: {
    flexDirection: "row",
    marginTop: 30,
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
    marginTop: 15,
  },
  welcomeContainer: {
    flexDirection: "column",
  },
  welcomeTxt: {
    fontWeight: "bold",
    fontSize: 40,
    color: "black",
  },
  titleTxt: {
    fontWeight: "bold",
    fontSize: 45,
    color: "black",
  },
  mapIcon: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: "auto",
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

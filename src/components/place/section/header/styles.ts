import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  backgroundImgContainer: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 160,
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
    // marginTop: -100, // NOTE: active when place background image visible
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
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },
  welcomeContainer: {
    flexDirection: "column",
  },
  welcomeTxt: {
    fontWeight: "bold",
    fontSize: 26,
    textTransform: "uppercase",
    color: "black",
  },
  titleTxt: {
    fontWeight: "bold",
    fontSize: 40,
    color: "black",
  },
  favoriteContainer: {
    marginTop: "auto",
    marginLeft: "auto",
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
  peopleCountContainer: {
    flexDirection: "row",
  },
  peopleCount: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: "purple",
    borderRadius: 20,
    marginRight: "auto",
    // borderWidth: 3,
  },
  peopleCountTxt: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 10,
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
  },
  saveActionBtnContainer: {
    width: 48,
    height: 48,
  },
  actionBtnContainer: {
    width: 48,
    height: 48,
    marginBottom: 10,
  },
  actionBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderColor: "black",
    borderWidth: 2,
  },
  servicesPerviewContainer: {
    flexDirection: "row",
  },
  serviceContainer: {
    width: 32,
    height: 32,
    backgroundColor: "black",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  serviceIcon: {},
});

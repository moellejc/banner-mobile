import { StyleSheet, Dimensions } from "react-native";
import { textColorMasonry } from "./constants";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const postHeight = WINDOW_HEIGHT * 0.3;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 1,
    height: postHeight,
    backgroundColor: "black",
    overflow: "hidden",
    flex: 1 / 2,
  },
  header: {
    position: "absolute",
    flexDirection: "row",
    left: 0,
    right: 0,
    top: 10,
    marginHorizontal: 10,
  },
  avatarContainer: {},
  headerInfoContainer: {
    flexDirection: "column",
    marginRight: "auto",
  },
  locationContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  parentLocation: {},
  locationSeparator: {
    marginHorizontal: 5,
  },
  currentLocation: {},
  locationTxt: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  usernameContainer: {
    flexDirection: "row",
  },
  usernameTxt: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    color: textColorMasonry,
  },
  postTimeContainer: {},
  postTimeTxt: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: "400",
    color: textColorMasonry,
  },
  optionsContainer: {
    marginLeft: "auto",
  },
  optionsIcon: {
    // transform: [{ rotateX: "90deg" }],
  },
  content: {
    height: postHeight,
  },
  messageContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  messageTxt: {
    fontSize: 20,
  },
  mediaContainer: {
    // marginTop: 10,
    height: postHeight,
  },
  mediaImageContainer: {
    // width: WINDOW_WIDTH,
  },
  mediaImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  mediaImage: {
    width: WINDOW_WIDTH / 2,
    height: postHeight,
    aspectRatio: 1,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  ratingContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  ratingIcon: {},
  rating: {
    marginHorizontal: 5,
  },
  ratingTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: textColorMasonry,
  },
  commentsContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  commentsIcon: {},
  commentsCount: {
    marginRight: 5,
  },
  commentsCountTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: textColorMasonry,
  },
  shareContainer: {},
});

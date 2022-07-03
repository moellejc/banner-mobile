import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
  },
  avatarContainer: {},
  headerInfoContainer: {
    flexDirection: "column",
    marginLeft: 10,
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
    color: "rebeccapurple",
  },
  usernameContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  usernameTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: "dimgray",
  },
  postTimeTxt: {
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "400",
    color: "gray",
  },
  optionsContainer: {
    marginLeft: "auto",
    marginTop: 3,
  },
  content: {
    marginTop: 10,
  },
  messageContainer: {},
  messageTxt: {
    fontSize: 20,
  },
  mediaContainer: {},
  mediaImage: {
    width: "100%",
    height: WINDOW_HEIGHT * 0.6,
    marginTop: 10,
  },
  footer: {},
  ratingContainer: {},
  commentsContainer: {},
  shareContainer: {},
});

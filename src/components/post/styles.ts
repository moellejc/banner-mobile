import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 25,
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 10,
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
    color: "black",
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
    marginBottom: 20,
  },
  messageContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  messageTxt: {
    fontSize: 20,
  },
  mediaContainer: {
    marginTop: 10,
  },
  mediaImageContainer: {
    width: WINDOW_WIDTH,
  },
  mediaImage: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.6,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
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
  },
  commentsContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  commentsIcon: {},
  commentsCount: {
    marginLeft: 5,
  },
  commentsCountTxt: {
    fontSize: 18,
    fontWeight: "600",
  },
  shareContainer: {},
});

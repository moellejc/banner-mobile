import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
  },
  contentContainer: {},
  ticketContainer: {
    flexDirection: "column",
  },
});

export const stylesTicket = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "black",
    width: "100%",
    height: WINDOW_HEIGHT * 0.2,
    padding: 10,
    overflow: "hidden",
  },
  ticketImageContainer: {
    ...StyleSheet.absoluteFillObject,
    // zIndex: 1,
  },
  ticketOverlayContainer: {
    ...StyleSheet.absoluteFillObject,
    // zIndex: 2,
  },
  ticketImage: {
    width: "100%",
    height: "100%",
  },
  dateContainer: {},
  dateTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    opacity: 0.75,
  },
  titleContainer: {},
  titleTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 5,
  },
  locationContainer: {},
  locationTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
  totalTicketsContainer: {
    marginTop: "auto",
  },
  totalTicketsTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

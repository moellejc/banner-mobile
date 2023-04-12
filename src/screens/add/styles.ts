import { StyleSheet, Dimensions } from "react-native";
import {
  SIDE_MARGIN,
  INPUT_BORDER_COLOR,
  INPUT_PLACEHOLDER_COLOR,
} from "./constants";

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIDE_MARGIN,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
  },
  bottomSheetContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: "auto",
    width: WINDOW_WIDTH - 2 * SIDE_MARGIN,
  },
  headerClose: {
    marginLeft: "auto",
    justifyContent: "center",
  },
  headerTitle: {
    marginRight: "auto",
  },
  headerTitleTxt: {
    fontSize: 36,
    fontWeight: "600",
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
  },
  inputContainer: { marginBottom: 30 },
  input: {
    width: WINDOW_WIDTH,
    textAlign: "left",
    fontSize: 20,
    marginVertical: 10,
    color: "black",
  },
  photoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    borderColor: INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
  },
  photoIconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  photoText: {
    fontSize: 20,
    color: INPUT_PLACEHOLDER_COLOR,
    marginTop: 10,
  },
  photo: {},
  submit: {
    alignSelf: "center",
    marginTop: "auto",
  },
});

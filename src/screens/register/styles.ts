import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    margin: 30,
    flexDirection: "column",
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  headline: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  icon: {
    width: 36,
    height: 44,
  },
  logo: {
    width: 204,
    height: 26,
  },
  buttonLogin: {},
  buttonRegister: {},
  input: {
    marginBottom: 10,
    width: WINDOW_WIDTH,
  },
});

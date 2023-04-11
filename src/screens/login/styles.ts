import { StyleSheet, Dimensions } from "react-native";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    margin: 30,
    flexDirection: "column",
    alignItems: "stretch",
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 80,
  },
  buttonLogin: {
    marginTop: 50,
  },
  buttonRegister: {
    marginTop: 15,
  },
  input: {
    // marginBottom: 30,
    width: WINDOW_WIDTH,
    textAlign: "left",
  },
  error: {
    color: "lightgray",
  },
});

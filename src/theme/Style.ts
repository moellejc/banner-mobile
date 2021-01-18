import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
  },
  row: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  buttonLogin: {
    width: Dimensions.get("window").width - 20,
  },
  buttonRegister: {},
  input: {
    marginBottom: 5,
    width: Dimensions.get("window").width - 20,
  },
});

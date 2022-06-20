import React, { useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface SettingsProps {}
const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Settings Screen</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});

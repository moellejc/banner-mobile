import React, { useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface ProfileProps {}
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Profile Screen</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "blue",
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

import React, { useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface ChatProps {}
const Chat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Chat Screen</Text>
    </View>
  );
};

export default Chat;

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

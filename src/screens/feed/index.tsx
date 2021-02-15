import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const FeedScreen: React.FC = (props: Props) => {
  return (
    <View>
      <Text style={styles.helloText}>Hello Feed</Text>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  helloText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

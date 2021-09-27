import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { WHITE } from "../../constants/styles/Colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

type PlaceOptionProps = {
  key: string;
  title: string;
};

export const PlaceOption = (props: PlaceOptionProps) => {
  return (
    <View style={placeStyle.container}>
      <Text style={placeStyle.placeholderText}>{props.title}</Text>
    </View>
  );
};

const placeStyle = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: screenWidth,
    height: screenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    fontSize: 40,
    color: WHITE,
  },
});

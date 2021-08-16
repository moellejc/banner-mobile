import React from "react";
import { Dimensions, Animated, StyleSheet } from "react-native";
import { GRAY_MEDIUM, WHITE, GRAY_LIGHT } from "../../constants/styles/Colors";
import { PlaceMenuDimensions } from "./PlaceMenu";
// import { placeMenuData } from "../organisms/Place";
import { getCurrentPlaceOptions } from "../../services/place.service";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

/**
 Indicator Component
*/
type PlaceMenuIndicatorProps = {
  measures: PlaceMenuDimensions[];
  scrollX: Animated.Value;
};
export const PlaceMenuIndicator = ({
  measures,
  scrollX,
}: PlaceMenuIndicatorProps) => {
  //   const inputRange = placeMenuData.map((_, i) => i * screenWidth);
  const inputRange = getCurrentPlaceOptions().map((_, i) => i * screenWidth);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        left: 0,
        width: indicatorWidth,
        backgroundColor: WHITE,
        bottom: -10,
        transform: [{ translateX }],
      }}
    />
  );
};

const indicatorStyle = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
});

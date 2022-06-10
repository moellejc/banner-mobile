import React, { useRef } from "react";
import { CollapseStates } from "../../../types/Misc";
import {
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  debug,
  SharedValue,
  interpolate,
} from "react-native-reanimated";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const START_SEARCH_TOP = windowHeight - 100;
const { interpolateNode, Extrapolate } = Animated;

interface PlaceHierarchyProps {
  panDownY: SharedValue<number>;
}
const PlaceHierarchy = ({ panDownY }: PlaceHierarchyProps) => {
  const translateContent = useAnimatedStyle(() => {
    const translateInter = interpolate(
      panDownY.value,
      [0, windowHeight],
      [windowHeight, 0],
      Extrapolate.CLAMP
    );
    return {
      bottom: translateInter,
    };
  });

  React.useEffect(() => {});

  return (
    <Animated.View style={[styles.container, translateContent]}></Animated.View>
  );
};

export default PlaceHierarchy;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: windowHeight - 10,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "black",
    zIndex: 100,
  },
});

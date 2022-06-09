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
} from "react-native-reanimated";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const START_SEARCH_TOP = windowHeight - 100;
const { interpolateNode, Extrapolate } = Animated;

interface PlaceHierarchyProps {}
const PlaceHierarchy = () => {
  // const translateInter = interpolateNode(y, {
  //   inputRange: [-windowHeight, 0],
  //   outputRange: [0, -windowHeight],
  //   extrapolate: Extrapolate.CLAMP,
  // });

  React.useEffect(() => {}, []);

  return <Animated.View style={[styles.container]}></Animated.View>;
};

export default PlaceHierarchy;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "black",
  },
});

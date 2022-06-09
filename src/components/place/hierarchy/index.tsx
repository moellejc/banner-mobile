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
} from "react-native-reanimated";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const START_SEARCH_TOP = windowHeight - 100;
const { interpolateNode, Extrapolate } = Animated;

interface PlaceHierarchyProps {
  panDownY: Animated.Value<number>;
}
const PlaceHierarchy = ({ panDownY }: PlaceHierarchyProps) => {
  const translateInter = interpolateNode(panDownY, {
    inputRange: [0, windowHeight],
    outputRange: [windowHeight, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  React.useEffect(() => {});

  return (
    <Animated.View style={[styles.container, { bottom: translateInter }]}>
      <Animated.Code>{() => debug("Hier TOP: ", translateInter)}</Animated.Code>
    </Animated.View>
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

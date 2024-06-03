import React, { useRef, useEffect } from "react";
import { CollapseStates } from "../../../types/enums";
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
import { styles } from "./styles";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const START_SEARCH_TOP = WINDOW_HEIGHT - 100;
const { interpolateNode, Extrapolate } = Animated;

interface PlaceHierarchyProps {}
const PlaceHierarchy = () => {
  const handleBackPress = () => {};

  useEffect(() => {});

  return (
    <Animated.View style={[styles.container]}>
      <TouchableOpacity onPress={handleBackPress}>
        <View style={styles.back}>
          <Text style={styles.backText}>Back</Text>
          <View style={styles.downArrow}>
            <Image
              source={require("../../../../assets/images/icon-chevron-up-black.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.downArrowIcon}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default PlaceHierarchy;

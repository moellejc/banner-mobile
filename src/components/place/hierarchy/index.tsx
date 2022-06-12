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

  const handleBackPress = () => {};

  React.useEffect(() => {});

  return (
    <Animated.View style={[styles.container, translateContent]}>
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

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: windowHeight - 10,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "black",
    zIndex: 100,
  },
  back: {
    position: "absolute",
    flexDirection: "column",
    bottom: 100,
    width: 100,
    height: 50,
    backgroundColor: "red",
  },
  backText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    marginBottom: 5,
  },
  downArrow: {
    flex: 1,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  downArrowIcon: {
    width: 30,
    height: 16,
    marginBottom: 15,
  },
});

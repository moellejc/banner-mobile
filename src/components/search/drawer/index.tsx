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
import { PanGestureHandler } from "react-native-gesture-handler";

const windowHeight = Dimensions.get("window").height;
const START_SEARCH_TOP = windowHeight - 100;

interface SearchDrawerProps {}
const SearchDrawer = () => {
  const collapseState = useRef(CollapseStates.Collapsed);
  const startPosition = useSharedValue(START_SEARCH_TOP);
  const y = useSharedValue(START_SEARCH_TOP);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      startPosition.value = event.absoluteY;
    },
    onActive: (event, ctx) => {
      y.value = startPosition.value + event.translationY;
    },
    onEnd: (event, ctx) => {
      // set the end Y based on collapse state
      const endY =
        collapseState.current == CollapseStates.Collapsed
          ? 0
          : START_SEARCH_TOP;

      // update collapsed state
      collapseState.current =
        collapseState.current == CollapseStates.Collapsed
          ? CollapseStates.Expanded
          : CollapseStates.Collapsed;

      // animate drawer position
      y.value = withTiming(endY, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    },
  });
  const uas = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: y.value }],
    };
  });

  React.useEffect(() => {}, []);

  return (
    <Animated.View style={[styles.container, uas]}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={styles.searchHeader}>
          <Image
            source={require("../../../../assets/images/icon-search.png")}
            resizeMode={"cover"}
            resizeMethod={"resize"}
            style={styles.searchHeaderIcon}
          />
          <Text style={styles.searchHeaderTitle}>What's Around?</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default SearchDrawer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: windowHeight,
    backgroundColor: "black",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 200,
  },
  searchHeader: {
    flex: 1,
    position: "absolute",
    top: 25,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchHeaderIcon: {
    width: 24,
    height: 24,
  },
  searchHeaderTitle: {
    fontSize: 24,
    fontWeight: "normal",
    color: "white",
    marginLeft: 10,
  },
});

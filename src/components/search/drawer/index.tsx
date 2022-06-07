import React, { useRef } from "react";
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
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

const windowHeight = Dimensions.get("window").height;
const { Value, interpolateNode, Extrapolate } = Animated;
const START_SEARCH_TOP = windowHeight - 75;

interface SearchProps {}
export const Search = () => {
  const isDragging = useSharedValue(false);
  const startPosition = useSharedValue(START_SEARCH_TOP);
  const y = useSharedValue(START_SEARCH_TOP);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      isDragging.value = true;
      startPosition.value = event.absoluteY;
      console.log("start");
    },
    onActive: (event, ctx) => {
      y.value = startPosition.value + event.translationY;
    },
    onEnd: (event, ctx) => {
      isDragging.value = false;
      y.value = event.translationY > windowHeight * 0.25 ? 0 : START_SEARCH_TOP;
      console.log("end");
    },
  });
  const uas = useAnimatedStyle(() => {
    return {
      //   backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [{ translateY: y.value }],
    };
  });

  //   const panResponder = useRef(
  //     PanResponder.create({
  //       onMoveShouldSetPanResponder: () => true,
  //       onPanResponderGrant: (event: GestureResponderEvent) => {
  //         panStart.current = event.nativeEvent.pageY;
  //       },
  //       onPanResponderMove: (event: GestureResponderEvent) => {
  //         let moveY =
  //           event.nativeEvent.pageY < START_SEARCH_TOP
  //             ? event.nativeEvent.pageY
  //             : START_SEARCH_TOP;
  //         moveY = moveY >= 0 ? moveY : 0;

  //         const offset = panStart.current - moveY;

  //         panY.setValue(START_SEARCH_TOP - offset);
  //       },
  //       onPanResponderRelease: () => {
  //         // start animation if needed
  //         console.log("released pan");
  //       },
  //     })
  //   ).current;

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
          <Text style={styles.searchHeaderTitle}>Find Something</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: windowHeight,
    backgroundColor: "black",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // top: START_SEARCH_TOP,
    top: 0,
    left: 0,
    right: 0,
  },
  searchHeader: {
    flex: 1,
    position: "absolute",
    top: 0,
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

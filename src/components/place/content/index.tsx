import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolateNode,
  useValue,
  debug,
} from "react-native-reanimated";
import {
  MIN_HEADER_HEIGHT,
  MAX_HEADER_HEIGHT,
  IPlace,
  SCREEN_UNSAFE_MARGIN_TOP,
  COVER_IMG_HEIGHT,
} from "../_place/model";
import { PlaceHeader } from "../header";
import { PlaceCover } from "../cover";
import { useDispatch } from "react-redux";
import { Actions, store } from "../../../state";
import { current } from "@reduxjs/toolkit";
import {
  PanGestureHandler,
  State,
  ScrollView,
  GestureEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

interface PlaceContentProps {
  place: IPlace;
  y: Animated.Value<number>;
  panDownY: Animated.Value<number>;
}
export const PlaceContent = ({ place, y, panDownY }: PlaceContentProps) => {
  const currentY = useRef(0);
  const ref = useRef();
  const scrollRef = useRef();
  const [scrollEnabled, setScrollEnanled] = useState(true);
  const translateInter = interpolateNode(panDownY, {
    inputRange: [0, windowHeight],
    outputRange: [0, windowHeight],
    extrapolate: Extrapolate.CLAMP,
  });

  const _onScrollDown = (
    event: GestureEvent<PanGestureHandlerEventPayload>
  ) => {
    if (!scrollEnabled) return;
    const { translationY } = event.nativeEvent;
    // handle PanGesture event here
    console.log(`Pan Gesture translation: ${translationY}`);
    panDownY.setValue(translationY);
  };

  const _onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (nativeEvent.contentOffset.y <= 0 && !scrollEnabled) {
      setScrollEnanled(true);
      console.log("scrollview scroll ENABLED");
    }
    if (nativeEvent.contentOffset.y > 0 && scrollEnabled) {
      setScrollEnanled(false);
      console.log("scrollview scroll DISABLED");
    }
  };

  const handleScroll = (nextY: number) => {
    // Scrolling to the point where place header is past the navbar
    // moving header from expanded to collapsed

    if (
      currentY.current < MAX_HEADER_HEIGHT - 20 &&
      nextY >= MAX_HEADER_HEIGHT - 20
    ) {
      store.dispatch({
        type: Actions.PlacesActions.TRANSITION_HEADER_COLLAPSE,
      });
    }

    if (
      currentY.current > MAX_HEADER_HEIGHT - 20 &&
      nextY <= MAX_HEADER_HEIGHT - 20
    ) {
      store.dispatch({
        type: Actions.PlacesActions.TRANSITION_HEADER_EXPAND,
      });
    }

    // set animation value
    y.setValue(nextY);
    currentY.current = nextY;
  };

  useEffect(() => {}, []);

  return (
    <Animated.View style={[styles.scrollContainer, { top: translateInter }]}>
      <Animated.Code>
        {() => debug("Content TOP: ", translateInter)}
      </Animated.Code>
      <ScrollView
        onScroll={_onScroll}
        // onScroll={(event) => {
        //   handleScroll(event.nativeEvent.contentOffset.y);
        // }}
        waitFor={scrollEnabled ? ref : scrollRef}
        scrollEventThrottle={16}
        style={styles.placeContainer}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[]}
        ref={scrollRef.current}
      >
        <PanGestureHandler
          enabled={scrollEnabled}
          ref={ref.current}
          activeOffsetY={5}
          failOffsetY={-5}
          onGestureEvent={_onScrollDown}
        >
          <View>
            <PlaceCover {...{ y, place }} />
            <PlaceHeader {...{ y, place }} />
            <View>
              {place.tracks.map((track, key) => (
                <View style={styles.postContainer} key={key + 1}>
                  <Text style={styles.postText}>{track.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </PanGestureHandler>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    position: "absolute",
    width: windowWidth - 20,
    height: windowHeight,
    left: 10,
    top: 10,
  },
  placeContainer: {
    flex: 1,
    marginTop: SCREEN_UNSAFE_MARGIN_TOP,
    // backgroundColor: "orange",
  },
  cover: {
    height: MAX_HEADER_HEIGHT - SCREEN_UNSAFE_MARGIN_TOP,
    marginBottom: 10,
  },
  postContainer: {
    height: 100,
  },
  postText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

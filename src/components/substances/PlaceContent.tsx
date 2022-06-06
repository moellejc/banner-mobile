import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import {
  MIN_HEADER_HEIGHT,
  MAX_HEADER_HEIGHT,
  IPlace,
  SCREEN_UNSAFE_MARGIN_TOP,
  COVER_IMG_HEIGHT,
} from "./PlaceModel";
import { PlaceHeader } from "./PlaceHeader";
import { useDispatch } from "react-redux";
import { Actions, store } from "../../state";
import { current } from "@reduxjs/toolkit";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

interface PlaceContentProps {
  place: IPlace;
  y: Animated.Value<number>;
}
export const PlaceContent = ({ place, y }: PlaceContentProps) => {
  const currentY = useRef(0);

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
    <Animated.ScrollView
      onScroll={(event) => {
        handleScroll(event.nativeEvent.contentOffset.y);
      }}
      scrollEventThrottle={16}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[]}
    >
      <View style={styles.cover}></View>
      <PlaceHeader {...{ y, place }} />
      <View>
        {place.tracks.map((track, key) => (
          <View style={styles.postContainer} key={key + 1}>
            <Text style={styles.postText}>{track.name}</Text>
          </View>
        ))}
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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

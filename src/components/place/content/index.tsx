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
  withTiming,
  Easing,
  useAnimatedGestureHandler,
  SharedValue,
  useAnimatedStyle,
  interpolate,
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
import { connect } from "react-redux";
import { RootState, Actions, store } from "../../../state";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import { CollapseStates } from "../../../types";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

interface PlaceContentProps {
  place: IPlace;
  y: Animated.Value<number>;
  panDownY: SharedValue<number>;
  hierarchyState: CollapseStates;
}
const PlaceContent = ({
  place,
  y,
  panDownY,
  hierarchyState,
}: PlaceContentProps) => {
  const currentY = useRef(0);
  const ref = useRef();
  const scrollRef = useRef();
  const [scrollEnabled, setScrollEnanled] = useState(true);
  const translateContent = useAnimatedStyle(() => {
    const translateInter = interpolate(
      panDownY.value,
      [0, windowHeight],
      [0, windowHeight],
      Extrapolate.CLAMP
    );
    return {
      top: translateInter,
    };
  });

  const panEventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      // panDownY.setValue(event.translationY);
      console.log("start pan");
    },
    onActive: (event, ctx) => {
      panDownY.value = event.translationY;
      console.log(`active pan: ${event.translationY}`);
    },
    onEnd: (event, ctx) => {
      console.log(`end pan: ${event.translationY}`);
      // expand is pan great than N% else collapse
      if (event.translationY > windowHeight * 0.25) {
        store.dispatch({
          type: Actions.PlacesActions.TRANSITION_HIERARCHY_EXPAND,
        });
        return;
      }
      handleHierarchyCollapseExpand();
    },
  });

  const _onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (nativeEvent.contentOffset.y <= 0 && !scrollEnabled) {
      setScrollEnanled(true);
    }
    if (nativeEvent.contentOffset.y > 0 && scrollEnabled) {
      setScrollEnanled(false);
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

  const handleHierarchyCollapseExpand = () => {
    const endY = hierarchyState == CollapseStates.Expanded ? windowHeight : 0;
    panDownY.value = withTiming(endY, {
      duration: 300,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  };

  useEffect(() => {
    handleHierarchyCollapseExpand();
  });

  return (
    <Animated.View style={[styles.scrollContainer, translateContent]}>
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
          onGestureEvent={panEventHandler}
        >
          <Animated.View>
            <PlaceCover {...{ y, place }} />
            <PlaceHeader {...{ y, place }} />
            <View>
              {place.tracks.map((track, key) => (
                <View style={styles.postContainer} key={key + 1}>
                  <Text style={styles.postText}>{track.name}</Text>
                </View>
              ))}
            </View>
          </Animated.View>
        </PanGestureHandler>
      </ScrollView>
    </Animated.View>
  );
};

const mapStateToProps = (state: RootState) => {
  return { hierarchyState: state.places.hierarchyState };
};

export default connect(mapStateToProps)(PlaceContent);

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

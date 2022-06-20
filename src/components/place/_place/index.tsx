import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Animated, { useSharedValue, SharedValue } from "react-native-reanimated";
import PlaceContent from "../content";
import PlaceHierarchy from "../hierarchy";
import { IPlace, BANNER_PLACE_POSITIONS } from "./model";
import { CollapseStates } from "../../../types/";
import { connect } from "react-redux";
import { RootState, Actions, store } from "../../../state";
import { useDispatch } from "react-redux";
import { PlacesActions } from "../../../state/actions";
import { PlaceScreens } from "../../../types/Misc";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { Value } = Animated;

const place: IPlace = {
  name: "Remote Control",
  artist: "Jan Blomqvist",
  release: 2016,
  // eslint-disable-next-line global-require
  cover: require("../../../../assets/images/mock-images/Chipotle-01.jpeg"),
  tracks: [
    { name: "Stories Over" },
    { name: "More", artist: "Jan Blomqvist, Elena Pitoulis" },
    { name: "Empty Floor" },
    { name: "Her Great Escape" },
    { name: "Dark Noise" },
    { name: "Drift", artist: "Jan Blomqvist, Aparde" },
    { name: "Same Mistake" },
    {
      name: "Dancing People Are Never Wrong",
      artist: "Jan Blomqvist, The Bianca Story",
    },
    { name: "Back in the Taxi" },
    { name: "Ghosttrack" },
    { name: "Just OK" },
    { name: "The End" },
  ],
};

interface PlaceProps {
  bannerPlaceY: SharedValue<number>;
}

const Place = ({ bannerPlaceY }: PlaceProps) => {
  const y = new Value(0);
  const panDownY = useSharedValue(0);
  const bannerPlaceScrollRef = useRef<ScrollView>(null);
  const dispatch = useDispatch();

  const handleScroll = (y: number) => {
    bannerPlaceY.value = y;

    // set displayed page
    switch (y) {
      case BANNER_PLACE_POSITIONS.CONTENT:
        dispatch({
          type: PlacesActions.UPDATE_DISPLAY_SCREEN,
          payload: PlaceScreens.Content,
        });
        break;
      case BANNER_PLACE_POSITIONS.HIERARCHY:
        dispatch({
          type: PlacesActions.UPDATE_DISPLAY_SCREEN,
          payload: PlaceScreens.Hierarchy,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={bannerPlaceScrollRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowHeight}
        decelerationRate={"fast"}
        contentOffset={{ x: 0, y: BANNER_PLACE_POSITIONS.CONTENT }}
        scrollEventThrottle={16}
        onScroll={(event) => {
          handleScroll(event.nativeEvent.contentOffset.y);
        }}
        bounces={false}
        style={styles.scrollContainerPlace}
      >
        <View style={[styles.screen]}>
          <PlaceHierarchy />
        </View>
        <View style={[styles.screen]}>
          <PlaceContent
            {...{
              y,
              panDownY,
              place,
              hierarchyState: CollapseStates.Collapsed,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    goToPlaceScreen: state.places.goToPlaceScreen,
  };
};

export default connect(mapStateToProps)(Place);

const stylesSearch = StyleSheet.create({});

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
  },
  scrollContainerPlace: {
    flexDirection: "column",
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    height: windowHeight,
    backgroundColor: "white",
  },
  screen: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
  },
});

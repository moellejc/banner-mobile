import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Image,
  Text,
} from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { PlaceCover } from "../cover";
import { PlaceContent } from "../content";
import PlaceHierarchy from "../hierarchy";
import { IPlace } from "./model";

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

interface PlaceProps {}
const Place = ({}: PlaceProps) => {
  const y = new Value(0);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      console.log("start content scroll");
    },
    onActive: (event, ctx) => {
      console.log(`scroll: ${event.translationY}`);
    },
    onEnd: (event, ctx) => {
      console.log("end content scroll");
    },
  });

  React.useEffect(() => {}, []);

  return (
    <ScrollView
      scrollEventThrottle={16}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      snapToInterval={windowHeight}
      contentOffset={{ x: 0, y: windowHeight }}
    >
      <PlaceHierarchy />
      <View style={styles.contentContainer}>
        <PlaceCover {...{ y, place }} />
        <PlaceContent {...{ y, place }} />
      </View>
    </ScrollView>
  );
};

export default Place;

const stylesSearch = StyleSheet.create({});

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
  },
  contentContainer: {
    height: windowHeight,
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
  },
});

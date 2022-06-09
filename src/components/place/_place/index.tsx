import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
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
  const panDownY = new Value(0);

  React.useEffect(() => {}, []);

  return (
    <>
      <View style={styles.contentContainer}>
        <PlaceHierarchy {...{ panDownY }} />
        <PlaceContent {...{ y, panDownY, place }} />
      </View>
    </>
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
    position: "absolute",
    top: 0,
    height: windowHeight,
    backgroundColor: "white",
  },
});

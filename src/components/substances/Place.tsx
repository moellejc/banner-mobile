import React from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import Animated from "react-native-reanimated";
import { PlaceCover } from "./PlaceCover";
import { PlaceContent } from "./PlaceContent";
import { IPlace } from "./PlaceModel";
import BannerHeader from "./BannerHeader";
import { Search } from "./Search";
import { HeaderStates } from "../../types";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { Value } = Animated;

const place: IPlace = {
  name: "Remote Control",
  artist: "Jan Blomqvist",
  release: 2016,
  // eslint-disable-next-line global-require
  cover: require("../../../assets/images/mock-images/Chipotle-01.jpeg"),
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
export const Place = ({}: PlaceProps) => {
  const y = new Value(0);
  React.useEffect(() => {}, []);

  return (
    <>
      <BannerHeader {...{ collapseStatus: HeaderStates.Expanded }} />
      <View style={styles.container}>
        <PlaceCover {...{ y, place }} />
        <PlaceContent {...{ y, place }} />
      </View>
      <Search />
    </>
  );
};

const stylesSearch = StyleSheet.create({});

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
  },
});

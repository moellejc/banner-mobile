import React from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import Animated from "react-native-reanimated";
import { PlaceCover } from "./PlaceCover";
import { PlaceContent } from "./PlaceContent";
import { IPlace } from "./PlaceModel";
import { BannerHeader } from "./BannerHeader";

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
      <BannerHeader {...{ y }} />
      <View style={styles.container}>
        <PlaceCover {...{ y, place }} />
        <PlaceContent {...{ y, place }} />
      </View>
      <View style={stylesSearch.container}>
        <View style={stylesSearch.searchHeader}>
          <Image
            source={require("../../../assets/images/icon-search.png")}
            resizeMode={"cover"}
            resizeMethod={"resize"}
            style={stylesSearch.searchHeaderIcon}
          />
          <Text style={stylesSearch.searchHeaderTitle}>Find Something</Text>
        </View>
      </View>
    </>
  );
};

const stylesSearch = StyleSheet.create({
  container: {
    position: "absolute",
    height: windowHeight,
    backgroundColor: "black",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    top: windowHeight - 75,
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

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
  },
});

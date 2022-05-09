import React from "react";
// import { useMutation } from "@apollo/client";
import {
  findNodeHandle,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  PanResponder,
  ListRenderItem,
} from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { PlaceCover } from "./PlaceCover";
import { PlaceContent } from "./PlaceContent";
import { IPlace } from "./PlaceModel";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

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
    <View style={style.container}>
      <PlaceCover {...{ y, place }} />
      <PlaceContent {...{ y, place }} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "white",
  },
});

const servicesStyle = StyleSheet.create({
  container: {
    height: 32,
    position: "absolute",
    bottom: 110,
    left: 0,
    right: 0,
    flexDirection: "row",
  },
  serviceItem: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginRight: 5,
  },
  serviceItemText: {
    height: 32,
    justifyContent: "center",
  },
  serviceItemIcon: {
    width: 18,
    height: 18,
  },
  serviceItemFollowers: {
    color: "red",
    fontSize: 14,
  },
});

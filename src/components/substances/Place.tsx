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
    <>
      <View style={styles.container}>
        <View style={styles.profileSmall}>
          <Image
            source={require("../../../assets/images/mock-images/test_profile_img_01.png")}
            resizeMode={"cover"}
            resizeMethod={"resize"}
            style={styles.profileSmallIcon}
          />
        </View>
        <View style={styles.placeParent}>
          <View style={styles.upArrow}>
            <Image
              source={require("../../../assets/images/icon-chevron-up.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.upArrowIcon}
            />
          </View>
          <View style={styles.placeParentContent}>
            <Image
              source={require("../../../assets/images/icon-city-white.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.placeParentIcon}
            />
            <Text style={styles.placeParentText}>West Chester</Text>
          </View>
        </View>
        <View style={styles.discover}>
          <Image
            source={require("../../../assets/images/icon-explore.png")}
            resizeMode={"cover"}
            resizeMethod={"resize"}
            style={styles.discoverIcon}
          />
        </View>
      </View>
      <View style={style.container}>
        <PlaceCover {...{ y, place }} />
        <PlaceContent {...{ y, place }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  profileSmall: {
    position: "absolute",
    left: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  profileSmallIcon: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },
  placeParent: {
    flexDirection: "column",
    position: "absolute",
    bottom: 15,
  },
  upArrow: {
    flex: 1,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  upArrowIcon: {
    width: 30,
    height: 16,
    marginBottom: 15,
  },
  placeParentContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  placeParentIcon: {
    width: 24,
    height: 24,
  },
  placeParentText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    marginLeft: 5,
  },
  discover: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  discoverIcon: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },
});

const style = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "white",
  },
});

import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  SafeAreaView,
  FlatList,
  SectionList,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const MIN_PLACE_IMAGE_HEIGHT = WINDOW_HEIGHT * 0.33;

export const PlaceHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.placeHeaderContainer}>
      <View style={[styles.placeHierarchyContainer, { top: insets.top }]}>
        <Text style={[styles.placeHierarchyItemTxt, { textAlign: "right" }]}>
          West Chester
        </Text>
        <Text style={[styles.placeHierarchyItemTxt, { textAlign: "left" }]}>
          Here
        </Text>
      </View>
      <View style={styles.placeBackgroundImageContainer}>
        <Image
          style={styles.placeBackgroundImage}
          source={require("../../../assets/images/mock-images/topgolf-cleveland-venue-exterior.jpeg")}
        />
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.8)", "transparent", "rgba(0,0,0,0.95)"]}
          locations={[0, 0.3, 0.95]}
          style={styles.placeBackgroundImageGradient}
        />
      </View>
      <View style={styles.placeHeaderInfoContainer}>
        <Text style={styles.placeTitleTxt}>Topgolf</Text>
        <Text style={styles.placeAddressTxt}>9568 Water Front Dr.</Text>
        <Text style={styles.placeAddressTxt}>West Chester, OH</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeHeaderContainer: {
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    left: 0,
    width: WINDOW_WIDTH,
  },
  // Place Hierarchy
  placeHierarchyContainer: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    zIndex: 100,
    height: 30,
  },
  placeHierarchyItemTxt: {
    flex: 1,
    // color: "#666666",
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  // Place Background
  placeBackgroundImageContainer: {},
  placeBackgroundImage: {
    width: WINDOW_WIDTH,
    height: MIN_PLACE_IMAGE_HEIGHT,
  },
  placeBackgroundImageGradient: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  placeHeaderInfoContainer: {
    position: "absolute",
    top: MIN_PLACE_IMAGE_HEIGHT - 50,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  placeTitleTxt: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  placeAddressTxt: {
    color: "#666666",
    fontSize: 18,
    marginBottom: 4,
  },

  placeFeedContainer: {},

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

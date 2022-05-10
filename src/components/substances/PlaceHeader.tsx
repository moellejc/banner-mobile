import React from "react";
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
import { IPlace } from "./PlaceModel";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const { interpolateNode, Extrapolate } = Animated;

interface PlaceHeaderProps {
  place: IPlace;
  y: Animated.Value<number>;
}
export const PlaceHeader = ({ place, y }: PlaceHeaderProps) => {
  const opacityInter = interpolateNode(y, {
    inputRange: [-75, 0],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View style={[styles.container, { opacity: opacityInter }]}>
      {/* place header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerTitles}>
          <Text style={styles.organizationTitle}>Chipotle, inc.</Text>
          <Text style={styles.title}>West Chest Chipotle</Text>
        </View>
        <View>
          <Text style={styles.hours}>Closed - Opens at 10:45am</Text>
        </View>
        <View style={styles.actionMenu}>
          <View style={styles.actionMenuItem}>
            <Image
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={require("../../../assets/images/icon-save-white.png")}
              style={styles.actionMenuItemIcon}
            />
          </View>
          <View style={styles.actionMenuItem}>
            <Image
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={require("../../../assets/images/icon-share-white.png")}
              style={styles.actionMenuItemIcon}
            />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {},
  headerTitles: {},
  organizationTitle: {
    textTransform: "uppercase",
    color: "#9D9D9D",
    fontSize: 18,
    marginBottom: 5,
  },
  title: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  hours: {
    color: "black",
    fontSize: 18,
  },
  actionMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 44,
    backgroundColor: "red",
  },
  actionMenuItem: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(216,216,216,0.16)",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },
  actionMenuItemIcon: {
    width: 20,
    height: 20,
  },
});

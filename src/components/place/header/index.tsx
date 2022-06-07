import React, { useState } from "react";
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
import { IPlace, MAX_HEADER_HEIGHT, COVER_IMG_HEIGHT } from "../_place/model";

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
    inputRange: [0, MAX_HEADER_HEIGHT - 20, MAX_HEADER_HEIGHT],
    outputRange: [1, 1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacityReplaceInter = interpolateNode(y, {
    inputRange: [COVER_IMG_HEIGHT + 25, COVER_IMG_HEIGHT + 100],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={styles.container}>
      {/* place header */}
      <Animated.View style={[styles.headerContainer]}>
        <View style={styles.headerTitles}>
          <Text style={styles.title}>Chipotle</Text>
          <Text style={styles.organizationTitle}>West Chester, OH</Text>
        </View>
        <Animated.View style={{ opacity: opacityInter }}>
          <Text style={styles.hours}>Closed - Opens at 10:45am</Text>
        </Animated.View>
        <Animated.View style={[styles.actionMenu, { opacity: opacityInter }]}>
          <TouchableOpacity style={styles.actionMenuItem}>
            <Image
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={require("../../../../assets/images/icon-save.png")}
              style={styles.actionMenuItemIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionMenuItem}>
            <Image
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={require("../../../../assets/images/icon-share.png")}
              style={styles.actionMenuItemIcon}
            />
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      {/* <Animated.View
        style={[
          styles.replaceHeaderContainer,
          { opacity: opacityReplaceInter },
        ]}
      >
        <Text style={styles.reaplceTitle}>West Chest Chipotle</Text>
      </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  headerContainer: {
    height: 100,
  },
  headerTitles: {},
  organizationTitle: {
    textTransform: "uppercase",
    color: "#9D9D9D",
    fontSize: 18,
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
    marginTop: 5,
  },
  actionMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 44,
  },
  actionMenuItem: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },
  actionMenuItemIcon: {
    width: 24,
    height: 24,
  },
  replaceHeaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    backgroundColor: "white",
  },
  reaplceTitle: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 10,
  },
});

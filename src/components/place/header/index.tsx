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
import { styles } from "./styles";

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

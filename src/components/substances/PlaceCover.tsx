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
import { IPlace, MAX_HEADER_HEIGHT } from "./PlaceModel";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const { interpolateNode, Extrapolate } = Animated;
interface PlaceCoverProps {
  place: IPlace;
  y: Animated.Value<number>;
}
export const PlaceCover = ({ place, y }: PlaceCoverProps) => {
  const translateInter = interpolateNode(y, {
    inputRange: [0, MAX_HEADER_HEIGHT],
    outputRange: [0, -MAX_HEADER_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  const scaleInter = interpolateNode(y, {
    inputRange: [-100, 0],
    outputRange: [2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacityInter = interpolateNode(y, {
    inputRange: [-75, 0],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={[
        styles.backgroundContainer,
        { transform: [{ scale: scaleInter }], marginTop: translateInter },
      ]}
    >
      <Image
        source={require("../../../assets/images/mock-images/Chipotle-01.jpeg")}
        resizeMode={"cover"}
        resizeMethod={"resize"}
        style={styles.backgroundImage}
      />
      <Animated.View
        style={[styles.headerBackground, { opacity: opacityInter }]}
      >
        <LinearGradient
          colors={["white", "transparent"]}
          start={[0, 1]}
          end={[0, 0.25]}
          style={[styles.headerBackground]}
        ></LinearGradient>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: MAX_HEADER_HEIGHT,
    zIndex: 0,
  },
  backgroundImage: {
    width: windowWidth,
    height: "100%",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

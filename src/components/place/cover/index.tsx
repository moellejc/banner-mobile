import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import {
  IPlace,
  MAX_HEADER_HEIGHT,
  COVER_IMG_HEIGHT,
  COVER_IMG_TOP_MARGIN,
} from "../_place/model";

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
    inputRange: [-100, MAX_HEADER_HEIGHT],
    outputRange: [100, -MAX_HEADER_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  // const scaleInter = interpolateNode(y, {
  //   inputRange: [-100, 0],
  //   outputRange: [2, 1],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  // const opacityInter = interpolateNode(y, {
  //   inputRange: [-75, 0],
  //   outputRange: [0, 1],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  return (
    <Animated.View
      style={[styles.backgroundContainer, { marginTop: translateInter }]}
    >
      <Image
        source={require("../../../../assets/images/mock-images/Chipotle-01.jpeg")}
        resizeMode={"cover"}
        resizeMethod={"resize"}
        style={styles.backgroundImage}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    top: COVER_IMG_TOP_MARGIN,
    left: 0,
    right: 0,
    height: COVER_IMG_HEIGHT,
    zIndex: 0,
  },
  backgroundImage: {
    width: windowWidth - 20,
    marginBottom: 10,
    borderRadius: 20,
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

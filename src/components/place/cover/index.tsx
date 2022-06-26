import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import {
  IPlace,
  MAX_HEADER_HEIGHT,
  COVER_IMG_HEIGHT,
  COVER_IMG_TOP_MARGIN,
} from "../_place/model";
import { styles } from "./styles";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const { interpolateNode, Extrapolate } = Animated;
interface PlaceCoverProps {
  place: IPlace;
  y: Animated.Value<number>;
}
export const PlaceCover = ({ place, y }: PlaceCoverProps) => {
  const translateInter = interpolateNode(y, {
    inputRange: [-1000, MAX_HEADER_HEIGHT],
    outputRange: [1000, -MAX_HEADER_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View style={[styles.backgroundContainer]}>
      <Image
        source={require("../../../../assets/images/mock-images/Chipotle-01.jpeg")}
        resizeMode={"cover"}
        resizeMethod={"resize"}
        style={styles.backgroundImage}
      />
    </Animated.View>
  );
};

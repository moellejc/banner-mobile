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

interface PlaceCoverProps {
  place: IPlace;
  y: Animated.Value<number>;
}
export const PlaceCover = ({ place, y }: PlaceCoverProps) => {
  return (
    <View>
      <View style={style.backgroundContainer}>
        <Image
          source={require("../../../assets/images/mock-images/Chipotle-01.jpeg")}
          resizeMode={"cover"}
          resizeMethod={"resize"}
          style={style.backgroundImage}
        />
        <LinearGradient
          colors={["white", "transparent"]}
          start={[0, 1]}
          end={[0, 0.25]}
          style={style.headerBackground}
        ></LinearGradient>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight * 0.5,
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

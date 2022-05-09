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
import { MIN_HEADER_HEIGHT, IPlace } from "./PlaceModel";
import { PlaceHeader } from "./PlaceHeader";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

interface PlaceContentProps {
  place: IPlace;
  y: Animated.Value<number>;
}
export const PlaceContent = ({ place, y }: PlaceContentProps) => {
  return (
    <Animated.ScrollView
      onScroll={(event) => {
        y.setValue(event.nativeEvent.contentOffset.y);
      }}
      scrollEventThrottle={16}
      style={style.container}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}
    >
      <PlaceHeader {...{ y, place }} />
      <View>
        {place.tracks.map((track, key) => (
          <View key={key + 1}></View>
        ))}
      </View>
    </Animated.ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    pflex: 1,
    paddingTop: MIN_HEADER_HEIGHT - 10 / 2,
  },
});

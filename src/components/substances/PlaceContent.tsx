import React, { useEffect } from "react";
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
import {
  MIN_HEADER_HEIGHT,
  MAX_HEADER_HEIGHT,
  IPlace,
  SCREEN_UNSAFE_MARGIN_TOP,
} from "./PlaceModel";
import { PlaceHeader } from "./PlaceHeader";
import { useDispatch } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

interface PlaceContentProps {
  place: IPlace;
  y: Animated.Value<number>;
}
export const PlaceContent = ({ place, y }: PlaceContentProps) => {
  useEffect(() => {}, []);

  return (
    <Animated.ScrollView
      onScroll={(event) => {
        y.setValue(event.nativeEvent.contentOffset.y);
      }}
      scrollEventThrottle={16}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}
    >
      <View style={styles.cover}></View>
      <PlaceHeader {...{ y, place }} />
      <View>
        {place.tracks.map((track, key) => (
          <View style={styles.postContainer} key={key + 1}>
            <Text style={styles.postText}>{track.name}</Text>
          </View>
        ))}
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SCREEN_UNSAFE_MARGIN_TOP,
    // backgroundColor: "orange",
  },
  cover: {
    height: MAX_HEADER_HEIGHT - SCREEN_UNSAFE_MARGIN_TOP,
    marginBottom: 10,
  },
  postContainer: {
    height: 100,
  },
  postText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

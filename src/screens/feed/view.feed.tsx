import React, { useEffect, useRef } from "react";
import {
  findNodeHandle,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  PanResponder,
  ListRenderItem,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import Place from "../../components/place";
import { BANNER_SCROLL_POSITIONS } from "../../components/place/_place/model";
import BannerHeader from "../../components/header/bar";
import { CollapseStates } from "../../types";
import SearchDrawer from "../../components/search/drawer";
import Animated, { useSharedValue } from "react-native-reanimated";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type FeedScreenProps = {};
export const FeedScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bannerScrollX = useSharedValue(BANNER_SCROLL_POSITIONS.PLACE);
  const bannerScrollRef = useRef<ScrollView>(null);

  const scrollToSearch = () => {
    bannerScrollRef.current?.scrollTo({
      x: BANNER_SCROLL_POSITIONS.SEARCH,
      y: 0,
      animated: true,
    });
  };
  const scrollToProfile = () => {
    bannerScrollRef.current?.scrollTo({
      x: BANNER_SCROLL_POSITIONS.PROFILE,
      y: 0,
      animated: true,
    });
  };
  const scrollToSettings = () => {
    bannerScrollRef.current?.scrollTo({
      x: BANNER_SCROLL_POSITIONS.SETTINGS,
      y: 0,
      animated: true,
    });
  };
  const scrollToPlace = () => {
    bannerScrollRef.current?.scrollTo({
      x: BANNER_SCROLL_POSITIONS.PLACE,
      y: 0,
      animated: true,
    });
  };

  return (
    <>
      <ScrollView
        ref={bannerScrollRef}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        snapToInterval={windowWidth}
        decelerationRate={"fast"}
        contentOffset={{ x: BANNER_SCROLL_POSITIONS.PLACE, y: 0 }}
        scrollEventThrottle={16}
        onScroll={(event) => {
          bannerScrollX.value = event.nativeEvent.contentOffset.x;
        }}
        bounces={false}
        style={styles.scrollContainer}
      >
        <View style={[styles.screen, { backgroundColor: "green" }]}>
          <Text style={styles.screenText}>Screen 1</Text>
        </View>
        <View style={[styles.screen, { backgroundColor: "blue" }]}>
          <Text style={styles.screenText}>Screen 2</Text>
        </View>
        <View style={[styles.screen, { backgroundColor: "purple" }]}>
          <Text style={styles.screenText}>Screen 3</Text>
        </View>
        <View style={[styles.screen, { backgroundColor: "red" }]}>
          <Text style={styles.screenText}>Screen 4</Text>
        </View>
      </ScrollView>
      {/* <View style={feedStyle.container}>
        <Place />
      </View> 
      <SearchDrawer />
      */}
      <BannerHeader
        {...{
          collapseStatus: CollapseStates.Expanded,
          bannerScrollX,
          scrollToSearch,
          scrollToProfile,
          scrollToSettings,
          scrollToPlace,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  scrollContainer: {
    flexDirection: "row",
  },
  screen: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});

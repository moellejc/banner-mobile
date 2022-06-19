import React, { useEffect, useRef, useMemo, useCallback } from "react";
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
import {
  BANNER_SCROLL_POSITIONS,
  BANNER_PLACE_POSITIONS,
} from "../../components/place/_place/model";
import BannerHeader from "../../components/header/bar";
import { CollapseStates } from "../../types";
import SearchDrawer from "../../components/search/drawer";
import Animated, { useSharedValue } from "react-native-reanimated";
import BottomSheet from "@gorhom/bottom-sheet";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type FeedScreenProps = {};
export const FeedScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bannerScrollX = useSharedValue(BANNER_SCROLL_POSITIONS.PLACE);
  const bannerPlaceY = useSharedValue(BANNER_PLACE_POSITIONS.CONTENT);
  const bannerScrollRef = useRef<ScrollView>(null);
  const bannerPlaceScrollRef = useRef<ScrollView>(null);

  //
  // BOTTOM SHEET
  //
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [115, "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log("handleSheetChanges", index);
  }, []);

  const scrollToChat = () => {
    bannerScrollRef.current?.scrollTo({
      x: BANNER_SCROLL_POSITIONS.CHAT,
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
  const scrollToPlaceHierarchy = () => {
    bannerPlaceScrollRef.current?.scrollTo({
      x: 0,
      y: BANNER_PLACE_POSITIONS.HIERARCHY,
      animated: true,
    });
  };
  const scrollToPlaceContent = () => {
    bannerPlaceScrollRef.current?.scrollTo({
      x: 0,
      y: BANNER_PLACE_POSITIONS.CONTENT,
      animated: true,
    });
  };

  return (
    <>
      <ScrollView
        ref={bannerScrollRef}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
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
          <Text style={styles.screenText}>Settings</Text>
        </View>
        <View style={[styles.screen, { backgroundColor: "blue" }]}>
          <Text style={styles.screenText}>Profile</Text>
        </View>
        <ScrollView
          ref={bannerPlaceScrollRef}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={windowHeight}
          decelerationRate={"fast"}
          contentOffset={{ x: 0, y: BANNER_PLACE_POSITIONS.CONTENT }}
          scrollEventThrottle={16}
          onScroll={(event) => {
            bannerPlaceY.value = event.nativeEvent.contentOffset.y;
          }}
          bounces={false}
          style={styles.scrollContainerPlace}
        >
          <View style={[styles.screen, { backgroundColor: "black" }]}>
            <Text style={styles.screenText}>Place Hierarchy</Text>
          </View>
          <View style={[styles.screen, { backgroundColor: "purple" }]}>
            <Text style={styles.screenText}>Place Content</Text>
          </View>
        </ScrollView>

        <View style={[styles.screen, { backgroundColor: "red" }]}>
          <Text style={styles.screenText}>Chat</Text>
        </View>
      </ScrollView>
      {/* <View style={feedStyle.container}>
        <Place />
      </View> 
      <SearchDrawer />
      */}
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
      <BannerHeader
        {...{
          collapseStatus: CollapseStates.Expanded,
          bannerScrollX,
          bannerPlaceY,
          scrollToChat,
          scrollToProfile,
          scrollToSettings,
          scrollToPlace,
          scrollToPlaceHierarchy,
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
  scrollContainerPlace: {
    flexDirection: "column",
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

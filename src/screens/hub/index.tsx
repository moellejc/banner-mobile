import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import Place from "../../components/place";
import Profile from "../profile";
import Settings from "../settings";
import Chat from "../../components/chat";
import {
  BANNER_SCROLL_POSITIONS,
  BANNER_PLACE_POSITIONS,
} from "../../components/place/_place/model";
import BannerHeader from "../../components/header/bar";
import { CollapseStates, HubScreens } from "../../types";
import SearchDrawer from "../../components/search/drawer";
import Animated, { useSharedValue } from "react-native-reanimated";
import BottomSheet from "@gorhom/bottom-sheet";
import { connect } from "react-redux";
import { RootState, Actions, store } from "../../state";
import { HubActions } from "../../state/actions";
import { styles } from "./styles";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

type HubScreenProps = {};
const HubScreen: React.FC = () => {
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
  const snapPoints = useMemo(() => [115, "90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    // console.log("handleSheetChanges", index);
  }, []);

  const handleScrollTo = () => {
    if (!store.getState().hub.toGoScreen) return;

    switch (store.getState().hub.toGoScreen) {
      case HubScreens.Place:
        scrollToPlace();
        break;
      case HubScreens.Profile:
        scrollToProfile();
        break;
      case HubScreens.Settings:
        scrollToSettings();
        break;
      case HubScreens.Chat:
        scrollToChat();
        break;
      default:
        break;
    }

    // update state for current screen and go to screen
    // dispatch({
    //   type: HubActions.UPDATE_DISPLAYED_SCREEN,
    //   payload: store.getState().hub.toGoScreen,
    // });
    // dispatch({ type: HubActions.NAV_TOGO_SCREEN_END });
  };

  useEffect(() => {
    handleScrollTo();
  });

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
        snapToInterval={WINDOW_WIDTH}
        decelerationRate={"fast"}
        contentOffset={{ x: BANNER_SCROLL_POSITIONS.PLACE, y: 0 }}
        scrollEventThrottle={16}
        onScroll={(event) => {
          bannerScrollX.value = event.nativeEvent.contentOffset.x;
        }}
        bounces={false}
        style={styles.scrollContainer}
      >
        <View style={[styles.screen]}>
          <Settings />
        </View>
        <View style={[styles.screen]}>
          <Profile />
        </View>
        <View style={[styles.screen]}>
          <Place {...{ bannerPlaceY }} />
        </View>
        <View style={[styles.screen]}>
          <Chat />
        </View>
      </ScrollView>
      {/* <BottomSheet
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
      */}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    goToScreen: state.hub.toGoScreen,
  };
};

export default connect(mapStateToProps)(HubScreen);

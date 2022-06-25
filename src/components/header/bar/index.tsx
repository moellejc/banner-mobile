import React from "react";
import { Text, Image, View, TouchableOpacity, Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  SharedValue,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { connect } from "react-redux";
import { CollapseStates, HubScreens } from "../../../types";
import {
  BANNER_SCROLL_POSITIONS,
  BANNER_PLACE_POSITIONS,
} from "../../place/_place/model";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RootState, Actions, store } from "../../../state";
import { useDispatch } from "react-redux";
import { HubActions } from "../../../state/actions";
import { styles } from "./styles";
import { ICON_SIZE_MAX, ICON_SIZE_MIN } from "./constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
interface BannerHeaderProps {
  collapseStatus: CollapseStates;
  bannerScrollX: SharedValue<number>;
  bannerPlaceY: SharedValue<number>;
  scrollToChat: () => void;
  scrollToProfile: () => void;
  scrollToSettings: () => void;
  scrollToPlace: () => void;
  scrollToPlaceHierarchy: () => void;
}

const bannerScrollInputRange = [
  BANNER_SCROLL_POSITIONS.SETTINGS,
  BANNER_SCROLL_POSITIONS.PROFILE,
  BANNER_SCROLL_POSITIONS.PLACE,
  BANNER_SCROLL_POSITIONS.CHAT,
];

const placeScrollInputRange = [
  BANNER_PLACE_POSITIONS.HIERARCHY,
  BANNER_PLACE_POSITIONS.CONTENT,
];

const BannerHeader = ({
  collapseStatus,
  bannerScrollX,
  bannerPlaceY,
  scrollToChat,
  scrollToProfile,
  scrollToSettings,
  scrollToPlace,
  scrollToPlaceHierarchy,
}: BannerHeaderProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const aniBannerBar = useAnimatedStyle(() => {
    const translateInter = interpolate(
      bannerPlaceY.value,
      placeScrollInputRange,
      [windowHeight, 0],
      Extrapolate.CLAMP
    );
    return {
      top: translateInter,
    };
  });

  const aniUserIcon = useAnimatedStyle(() => {
    const iconCenter = windowWidth / 2 - ICON_SIZE_MAX / 2;
    const translateInter = interpolate(
      bannerScrollX.value,
      bannerScrollInputRange,
      [windowWidth, iconCenter, 10, -windowWidth],
      Extrapolate.CLAMP
    );
    const dimsInter = interpolate(bannerScrollX.value, bannerScrollInputRange, [
      ICON_SIZE_MIN,
      ICON_SIZE_MAX,
      ICON_SIZE_MIN,
      ICON_SIZE_MIN,
    ]);
    const opacityInter = interpolate(
      bannerScrollX.value,
      bannerScrollInputRange,
      [0, 1, 1, 1]
    );
    return {
      left: translateInter,
      width: dimsInter,
      height: dimsInter,
      opacity: opacityInter,
    };
  });

  const aniSettingsIcon = useAnimatedStyle(() => {
    const iconCenter = windowWidth / 2 - ICON_SIZE_MIN / 2;
    const translateInter = interpolate(
      bannerScrollX.value,
      bannerScrollInputRange,
      [iconCenter, 10, -windowWidth, -windowWidth],
      Extrapolate.CLAMP
    );
    return {
      left: translateInter,
    };
  });

  const aniChatIcon = useAnimatedStyle(() => {
    const translateInter = interpolate(
      bannerScrollX.value,
      bannerScrollInputRange,
      [-windowWidth, -windowWidth, 10, windowWidth - ICON_SIZE_MIN * 2 - 10],
      Extrapolate.CLAMP
    );
    return {
      right: translateInter,
    };
  });

  const aniParentArrow = useAnimatedStyle(() => {
    const trim = windowWidth / 2;
    const opacityInter = interpolate(
      bannerScrollX.value,
      [
        BANNER_SCROLL_POSITIONS.SETTINGS,
        BANNER_SCROLL_POSITIONS.PROFILE + trim,
        BANNER_SCROLL_POSITIONS.PLACE,
        BANNER_SCROLL_POSITIONS.CHAT - trim,
      ],
      [0, 0, 1, 0],
      Extrapolate.CLAMP
    );
    const marginInter = interpolate(
      bannerScrollX.value,
      [
        BANNER_SCROLL_POSITIONS.SETTINGS,
        BANNER_SCROLL_POSITIONS.PROFILE + trim,
        BANNER_SCROLL_POSITIONS.PLACE,
        BANNER_SCROLL_POSITIONS.CHAT - trim,
      ],
      [75, 75, 0, -75],
      Extrapolate.CLAMP
    );
    return {
      opacity: opacityInter,
      marginLeft: marginInter,
    };
  });

  const aniForwardIcon = useAnimatedStyle(() => {
    const translateInter = interpolate(
      bannerScrollX.value,
      bannerScrollInputRange,
      [10, 10, 10, 10],
      Extrapolate.CLAMP
    );
    const opacityInter = interpolate(
      bannerScrollX.value,
      bannerScrollInputRange,
      [1, 1, 0, 0],
      Extrapolate.CLAMP
    );
    return {
      right: translateInter,
      opacity: opacityInter,
    };
  });

  const aniBackIcon = useAnimatedStyle(() => {
    const translateInter = interpolate(
      bannerScrollX.value,
      bannerScrollInputRange,
      [10, 10, 10, 10],
      Extrapolate.CLAMP
    );
    const opacityInter = interpolate(
      bannerScrollX.value,
      bannerScrollInputRange,
      [0, 0, 0, 1],
      Extrapolate.CLAMP
    );
    return {
      left: translateInter,
      opacity: opacityInter,
    };
  });

  const handleForwardPress = () => {
    switch (bannerScrollX.value) {
      case BANNER_SCROLL_POSITIONS.PROFILE:
        dispatch({
          type: HubActions.NAV_TOGO_SCREEN_START,
          payload: HubScreens.Place,
        });
        // scrollToPlace();
        break;
      case BANNER_SCROLL_POSITIONS.SETTINGS:
        dispatch({
          type: HubActions.NAV_TOGO_SCREEN_START,
          payload: HubScreens.Profile,
        });
        // scrollToProfile();
        break;
      default:
        break;
    }
  };

  const handleBackPress = () => {
    switch (bannerScrollX.value) {
      case BANNER_SCROLL_POSITIONS.CHAT:
        dispatch({
          type: HubActions.NAV_TOGO_SCREEN_START,
          payload: HubScreens.Place,
        });
        // scrollToPlace();
        break;
      default:
        break;
    }
  };

  const handleParentPress = () => {
    // store.dispatch({
    //   type: Actions.PlacesActions.TRANSITION_HIERARCHY_EXPAND,
    // });
  };

  const handleChildPress = () => {
    // scroll to top
  };

  const handleHeaderCollapseStatus = (status: CollapseStates) => {
    // if (status == CollapseStates.Collapsed) collapseHeaderAni.start();
    // if (status == CollapseStates.Expanded) expandHeaderAni.start();
  };

  React.useEffect(() => {
    handleHeaderCollapseStatus(collapseStatus);
  });

  return (
    <Animated.View style={[styles.container, aniBannerBar]}>
      <Animated.View style={[styles.forward, aniForwardIcon]}>
        <TouchableOpacity onPress={handleForwardPress}>
          <Ionicons
            style={styles.forwardIcon}
            name="chevron-forward-outline"
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.back, aniBackIcon]}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons
            style={styles.backIcon}
            name="chevron-back-outline"
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.iconLeft, aniSettingsIcon]}>
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: HubActions.NAV_TOGO_SCREEN_START,
              payload: HubScreens.Settings,
            });
          }}
        >
          <Ionicons
            style={styles.iconImage}
            name="settings-outline"
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.profileSmall, aniUserIcon]}>
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: HubActions.NAV_TOGO_SCREEN_START,
              payload: HubScreens.Profile,
            });
            // scrollToProfile();
          }}
        >
          <Image
            source={require("../../../../assets/images/mock-images/test_profile_img_01.png")}
            resizeMode={"cover"}
            resizeMethod={"resize"}
            style={styles.profileSmallIcon}
          />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.placeParent, aniParentArrow]}>
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: HubActions.NAV_TOGO_SCREEN_START,
              payload: HubScreens.Place,
            });
            // scrollToPlaceHierarchy();
          }}
        >
          <View style={styles.upArrow}>
            <Image
              source={require("../../../../assets/images/icon-chevron-up-black.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.upArrowIcon}
            />
          </View>
          <View style={styles.placeParentContent}>
            <Image
              source={require("../../../../assets/images/icon-city-black.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.placeParentIcon}
            />
            <Text style={styles.placeParentText}>West Chester</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      {/*
      <Animated.View style={[styles.placeParentNext]}>
        <TouchableOpacity>
          <View style={styles.upArrow}>
            <Image
              source={require("../../../../assets/images/icon-chevron-up-black.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.upArrowIcon}
            />
          </View>
          <View style={styles.placeParentContent}>
            <Image
              source={require("../../../../assets/images/icon-city-black.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.placeParentIcon}
            />
            <Text style={styles.placeParentText}>Chipotle</Text>
          </View>
        </TouchableOpacity>
      </Animated.View> */}
      <Animated.View style={[styles.iconRight, aniChatIcon]}>
        <TouchableOpacity
          onPress={() => {
            scrollToChat();
          }}
        >
          <Ionicons
            style={styles.iconImage}
            name="chatbubble-outline"
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const mapStateToProps = (state: RootState) => {
  return { collapseStatus: state.places.headerState };
};

export default connect(mapStateToProps)(BannerHeader);

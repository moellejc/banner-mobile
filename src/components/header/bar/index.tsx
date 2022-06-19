import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Animated, {
  Extrapolate,
  SharedValue,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { connect } from "react-redux";
import { CollapseStates } from "../../../types";
import {
  BANNER_SCROLL_POSITIONS,
  BANNER_PLACE_POSITIONS,
} from "../../place/_place/model";
import { RootState, Actions, store } from "../../../state";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import Ionicons from "@expo/vector-icons/Ionicons";

// const { interpolateNode, Extrapolate } = Animated;
const BOTTOM_PLACE_PARENT_HEAD = 15;
const BOTTOM_HEAD_SPACER = 25;
const ITER_PADDING = 50;
const ICON_SIZE_MIN = 30;
const ICON_SIZE_MAX = 64;

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
        scrollToPlace();
        break;
      case BANNER_SCROLL_POSITIONS.SETTINGS:
        scrollToProfile();
        break;
      default:
        break;
    }
  };

  const handleBackPress = () => {
    switch (bannerScrollX.value) {
      case BANNER_SCROLL_POSITIONS.CHAT:
        scrollToPlace();
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
            scrollToSettings();
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
            scrollToProfile();
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
            scrollToPlaceHierarchy();
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

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 115,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    backgroundColor: "white",
  },
  profileSmall: {
    position: "absolute",
    left: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  profileSmallIcon: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
  iconLeft: {
    position: "absolute",
    left: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  iconRight: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
  placeParent: {
    flexDirection: "column",
    position: "absolute",
    bottom: BOTTOM_PLACE_PARENT_HEAD,
    left: 40,
    right: 40,
  },
  placeParentNext: {
    flexDirection: "column",
    position: "absolute",
    bottom: -25,
  },
  upArrow: {
    flex: 1,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  upArrowIcon: {
    width: 30,
    height: 16,
    marginBottom: 15,
  },
  placeParentContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  placeParentIcon: {
    width: 24,
    height: 24,
  },
  placeParentText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    marginLeft: 5,
  },
  forward: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  forwardIcon: { width: "100%", height: "100%" },

  back: {
    position: "absolute",
    left: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  backIcon: { width: "100%", height: "100%" },
});

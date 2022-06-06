import React, { useRef, useState } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { connect } from "react-redux";
import { MAX_HEADER_HEIGHT } from "./PlaceModel";
import { HeaderStates } from "../../types";
import { RootState } from "../../state";

// const { interpolateNode, Extrapolate } = Animated;
const BOTTOM_PLACE_PARENT_HEAD = 15;
const BOTTOM_HEAD_SPACER = 25;
const ITER_PADDING = 50;

interface BannerHeaderProps {
  collapseStatus: HeaderStates;
}
const BannerHeader = ({ collapseStatus }: BannerHeaderProps) => {
  const ref = useRef();

  const parentOpacity = useRef(new Animated.Value(1)).current;
  const parentBottom = useRef(new Animated.Value(0)).current;
  const childOpacity = useRef(new Animated.Value(0)).current;
  const childBottom = useRef(new Animated.Value(0)).current;
  const COLL_EXP_DURATION = 300;

  const collapseHeaderAni = Animated.parallel([
    Animated.timing(parentOpacity, {
      toValue: 0,
      duration: COLL_EXP_DURATION,
      useNativeDriver: false,
    }),
    Animated.timing(parentBottom, {
      toValue: BOTTOM_PLACE_PARENT_HEAD + BOTTOM_HEAD_SPACER,
      duration: COLL_EXP_DURATION,
      useNativeDriver: false,
    }),
    Animated.timing(childOpacity, {
      toValue: 1,
      duration: COLL_EXP_DURATION,
      useNativeDriver: false,
    }),
    Animated.timing(childBottom, {
      toValue: BOTTOM_PLACE_PARENT_HEAD,
      duration: COLL_EXP_DURATION,
      useNativeDriver: false,
    }),
  ]);

  const expandHeaderAni = Animated.parallel([
    Animated.timing(parentOpacity, {
      toValue: 1,
      duration: COLL_EXP_DURATION,
      useNativeDriver: false,
    }),
    Animated.timing(parentBottom, {
      toValue: BOTTOM_PLACE_PARENT_HEAD,
      duration: COLL_EXP_DURATION,
      useNativeDriver: false,
    }),
    Animated.timing(childOpacity, {
      toValue: 0,
      duration: COLL_EXP_DURATION,
      useNativeDriver: false,
    }),
    Animated.timing(childBottom, {
      toValue: BOTTOM_PLACE_PARENT_HEAD - BOTTOM_HEAD_SPACER,
      duration: COLL_EXP_DURATION,
      useNativeDriver: false,
    }),
  ]);

  // const opacityInOutInter = interpolateNode(y, {
  //   inputRange: [
  //     0,
  //     MAX_HEADER_HEIGHT - ITER_PADDING,
  //     MAX_HEADER_HEIGHT + ITER_PADDING,
  //   ],
  //   outputRange: [1, 1, 0],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  // const opacityInOutNextInter = interpolateNode(y, {
  //   inputRange: [
  //     0,
  //     MAX_HEADER_HEIGHT - ITER_PADDING,
  //     MAX_HEADER_HEIGHT + ITER_PADDING,
  //   ],
  //   outputRange: [0, 0, 1],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  // //BOTTOM_PLACE_PARENT
  // const moveInOutInter = interpolateNode(y, {
  //   inputRange: [
  //     MAX_HEADER_HEIGHT - ITER_PADDING,
  //     MAX_HEADER_HEIGHT + ITER_PADDING,
  //   ],
  //   outputRange: [
  //     BOTTOM_PLACE_PARENT_HEAD,
  //     BOTTOM_PLACE_PARENT_HEAD + BOTTOM_HEAD_SPACER,
  //   ],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  // const moveInOutNextInter = interpolateNode(y, {
  //   inputRange: [
  //     MAX_HEADER_HEIGHT - ITER_PADDING,
  //     MAX_HEADER_HEIGHT + ITER_PADDING,
  //   ],
  //   outputRange: [
  //     BOTTOM_PLACE_PARENT_HEAD - BOTTOM_HEAD_SPACER,
  //     BOTTOM_PLACE_PARENT_HEAD,
  //   ],
  //   extrapolate: Extrapolate.CLAMP,
  // });

  const handleParentPress = () => {
    // ref.current.scrollTo(0);
  };

  const handleHeaderCollapseStatus = (status: HeaderStates) => {
    if (status == HeaderStates.Collapsed) collapseHeaderAni.start();
    if (status == HeaderStates.Expanded) expandHeaderAni.start();
  };

  React.useEffect(() => {
    handleHeaderCollapseStatus(collapseStatus);
  });

  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.profileSmall}>
        <Image
          source={require("../../../assets/images/mock-images/test_profile_img_01.png")}
          resizeMode={"cover"}
          resizeMethod={"resize"}
          style={styles.profileSmallIcon}
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.placeParent,
          { opacity: parentOpacity, bottom: parentBottom },
        ]}
      >
        <TouchableOpacity>
          <View style={styles.upArrow}>
            <Image
              source={require("../../../assets/images/icon-chevron-up-black.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.upArrowIcon}
            />
          </View>
          <View style={styles.placeParentContent}>
            <Image
              source={require("../../../assets/images/icon-city-black.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.placeParentIcon}
            />
            <Text style={styles.placeParentText}>West Chester</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.placeParentNext,
          { opacity: childOpacity, bottom: childBottom },
        ]}
      >
        <TouchableOpacity>
          <View style={styles.upArrow}>
            <Image
              source={require("../../../assets/images/icon-chevron-up-black.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.upArrowIcon}
            />
          </View>
          <View style={styles.placeParentContent}>
            <Image
              source={require("../../../assets/images/icon-city-black.png")}
              resizeMode={"cover"}
              resizeMethod={"resize"}
              style={styles.placeParentIcon}
            />
            <Text style={styles.placeParentText}>Chipotle</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity style={styles.discover}>
        <Image
          source={require("../../../assets/images/icon-explore-black.png")}
          resizeMode={"cover"}
          resizeMethod={"resize"}
          style={styles.discoverIcon}
        />
      </TouchableOpacity>
    </View>
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
    width: 30,
    height: 30,
  },
  placeParent: {
    flexDirection: "column",
    position: "absolute",
    bottom: BOTTOM_PLACE_PARENT_HEAD - BOTTOM_HEAD_SPACER,
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
  discover: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 30,
    height: 30,
  },
  discoverIcon: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },
});

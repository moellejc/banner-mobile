import React from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const { interpolateNode, Extrapolate } = Animated;

interface BannerHeaderProps {
  y: Animated.Value<number>;
}
export const BannerHeader = ({ y }: BannerHeaderProps) => {
  const opacityInter = interpolateNode(y, {
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  React.useEffect(() => {}, []);

  return (
    <Animated.View style={[styles.container, { opacity: opacityInter }]}>
      <TouchableOpacity style={styles.profileSmall}>
        <Image
          source={require("../../../assets/images/mock-images/test_profile_img_01.png")}
          resizeMode={"cover"}
          resizeMethod={"resize"}
          style={styles.profileSmallIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.placeParent}>
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
      <TouchableOpacity style={styles.discover}>
        <Image
          source={require("../../../assets/images/icon-explore-black.png")}
          resizeMode={"cover"}
          resizeMethod={"resize"}
          style={styles.discoverIcon}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

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
    bottom: 15,
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

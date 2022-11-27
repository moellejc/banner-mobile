import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faLocationDot,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { MENU_ICON_SIZE, MENU_TOTAL_OPTIONS } from "./constants";
import { styles, calculateIndicatorPosition } from "./styles";

interface MenuProps {
  data: "";
}

const Menu = () => {
  const offset = useSharedValue(
    calculateIndicatorPosition(1, MENU_TOTAL_OPTIONS)
  );

  const indicatorAni = useAnimatedStyle(() => {
    return {
      left: withTiming(offset.value, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      }),
    };
  });

  const moveIndicator = (index: number) => {
    offset.value = calculateIndicatorPosition(index, MENU_TOTAL_OPTIONS);
  };

  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuIconsContainer}>
        <View style={styles.iconContainer}>
          {/* <TouchableOpacity style={styles.icon}>
            <Avatar
              bg="gray.300"
              alignSelf="center"
              size="sm"
              source={{
                uri: "",
              }}
            />
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              moveIndicator(0);
            }}
          >
            <FontAwesomeIcon
              color="black"
              size={MENU_ICON_SIZE}
              icon={faTimeline}
              style={{ transform: [{ rotate: "90deg" }] }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              moveIndicator(1);
            }}
          >
            <FontAwesomeIcon
              color="black"
              size={MENU_ICON_SIZE}
              icon={faLocationDot}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              moveIndicator(2);
            }}
          >
            <FontAwesomeIcon
              color="black"
              size={MENU_ICON_SIZE}
              icon={faPlus}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              moveIndicator(3);
            }}
          >
            <FontAwesomeIcon
              color="black"
              size={MENU_ICON_SIZE}
              icon={faMessage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              moveIndicator(4);
            }}
          >
            <FontAwesomeIcon
              color="black"
              size={MENU_ICON_SIZE}
              icon={faMagnifyingGlass}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.indicatorContainer}>
        <Animated.View style={[styles.indicator, indicatorAni]}></Animated.View>
      </View>
    </View>
  );
};

export default Menu;

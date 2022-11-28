import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
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
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  MENU_ICON_SIZE,
  MENU_TOTAL_OPTIONS,
  MENU_OPTION_COLOR_INACTIVE,
  MENU_OPTION_COLOR_ACTIVE,
  MENU_ICON_ADD_SIZE,
} from "./constants";
import { styles, calculateIndicatorPosition } from "./styles";

enum MenuOptions {
  History,
  Here,
  Add,
  Messages,
  Search,
}

interface MenuProps {
  data: "";
}

const Menu = () => {
  const menuStatus = useRef(MenuOptions.Here);
  const [historyColor, setHistoryColor] = useState(MENU_OPTION_COLOR_INACTIVE);
  const [hereColor, setHereColor] = useState(MENU_OPTION_COLOR_ACTIVE);
  const [addColor, setAddColor] = useState(MENU_OPTION_COLOR_INACTIVE);
  const [messagesColor, setMessagesColor] = useState(
    MENU_OPTION_COLOR_INACTIVE
  );
  const [searchColor, setSearchColor] = useState(MENU_OPTION_COLOR_INACTIVE);

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

  const menuOptionScale = useSharedValue(1);

  const optionScaleAni = useAnimatedStyle(() => {
    return {
      transform: [
        { scaleX: menuOptionScale.value, scaleY: menuOptionScale.value },
      ],
    };
  });

  const changeOption = (nextOption: MenuOptions) => {
    if (nextOption == menuStatus.current) return;

    // reset active option
    switch (menuStatus.current) {
      case MenuOptions.History:
        setHistoryColor(MENU_OPTION_COLOR_INACTIVE);
        break;
      case MenuOptions.Here:
        setHereColor(MENU_OPTION_COLOR_INACTIVE);
        break;
      case MenuOptions.Add:
        setAddColor(MENU_OPTION_COLOR_INACTIVE);
        break;
      case MenuOptions.Messages:
        setMessagesColor(MENU_OPTION_COLOR_INACTIVE);
        break;
      case MenuOptions.Search:
        setSearchColor(MENU_OPTION_COLOR_INACTIVE);
        break;
      default:
        break;
    }

    // set new option
    switch (nextOption) {
      case MenuOptions.History:
        setHistoryColor(MENU_OPTION_COLOR_ACTIVE);
        break;
      case MenuOptions.Here:
        setHereColor(MENU_OPTION_COLOR_ACTIVE);
        break;
      case MenuOptions.Add:
        setAddColor(MENU_OPTION_COLOR_ACTIVE);
        break;
      case MenuOptions.Messages:
        setMessagesColor(MENU_OPTION_COLOR_ACTIVE);
        break;
      case MenuOptions.Search:
        setSearchColor(MENU_OPTION_COLOR_ACTIVE);
        break;
      default:
        break;
    }

    menuStatus.current = nextOption;
  };

  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuIconsContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            changeOption(MenuOptions.History);
          }}
        >
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <FontAwesomeIcon
                color={historyColor}
                size={MENU_ICON_SIZE}
                icon={faShoePrints}
                style={{ transform: [{ rotate: "-90deg" }] }}
              />
            </View>
            <Text style={styles.menuTxt}>History</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            changeOption(MenuOptions.Here);
          }}
        >
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <FontAwesomeIcon
                color={hereColor}
                size={MENU_ICON_SIZE}
                icon={faLocationDot}
              />
            </View>
            <Text style={styles.menuTxt}>Here</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            changeOption(MenuOptions.Add);
          }}
        >
          <View style={styles.iconContainer}>
            <View style={[styles.icon, styles.iconAdd]}>
              <FontAwesomeIcon
                color={addColor}
                size={MENU_ICON_ADD_SIZE}
                icon={faPlus}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            changeOption(MenuOptions.Messages);
          }}
        >
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <FontAwesomeIcon
                color={messagesColor}
                size={MENU_ICON_SIZE}
                icon={faMessage}
              />
            </View>
            <Text style={styles.menuTxt}>Messages</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            changeOption(MenuOptions.Search);
          }}
        >
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <FontAwesomeIcon
                color={searchColor}
                size={MENU_ICON_SIZE}
                icon={faMagnifyingGlass}
              />
            </View>
            <View>
              <Text style={[styles.menuTxt]}>Search</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* <View style={styles.indicatorContainer}>
        <Animated.View style={[styles.indicator, indicatorAni]}></Animated.View>
      </View> */}
    </View>
  );
};

export default Menu;

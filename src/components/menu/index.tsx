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
  faPlus,
  faLocationDot,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage, faCompass } from "@fortawesome/free-regular-svg-icons";
import {
  MENU_ICON_SIZE,
  MENU_TOTAL_OPTIONS,
  MENU_OPTION_COLOR_INACTIVE,
  MENU_OPTION_COLOR_ACTIVE,
  MENU_ICON_ADD_SIZE,
} from "./constants";
import { styles, calculateIndicatorPosition } from "./styles";
import IconPulse from "../../../assets/images/icon-pulse.svg";
import IconGroupNear from "../../../assets/images/icon-group-near.svg";
import { useNavigation } from "@react-navigation/native";

enum MenuOptions {
  History,
  Discover,
  Here,
  Group,
  Add,
}

interface MenuProps {
  data: "";
}

const Menu = () => {
  const navigation = useNavigation();
  const menuStatus = useRef(MenuOptions.Here);
  const [historyColor, setHistoryColor] = useState(MENU_OPTION_COLOR_INACTIVE);
  const [hereColor, setHereColor] = useState(MENU_OPTION_COLOR_ACTIVE);
  const [discoverColor, setDiscoverColor] = useState(
    MENU_OPTION_COLOR_INACTIVE
  );
  const [groupColor, setGroupColor] = useState(MENU_OPTION_COLOR_INACTIVE);
  const [addColor, setAddColor] = useState(MENU_OPTION_COLOR_INACTIVE);

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
      case MenuOptions.Discover:
        setDiscoverColor(MENU_OPTION_COLOR_INACTIVE);
        break;
      case MenuOptions.Here:
        setHereColor(MENU_OPTION_COLOR_INACTIVE);
        break;
      case MenuOptions.Group:
        setGroupColor(MENU_OPTION_COLOR_INACTIVE);
        break;
      case MenuOptions.Add:
        setAddColor(MENU_OPTION_COLOR_INACTIVE);
        break;
      default:
        break;
    }

    // set new option
    switch (nextOption) {
      case MenuOptions.History:
        setHistoryColor(MENU_OPTION_COLOR_ACTIVE);
        break;
      case MenuOptions.Discover:
        setDiscoverColor(MENU_OPTION_COLOR_ACTIVE);
        break;
      case MenuOptions.Here:
        setHereColor(MENU_OPTION_COLOR_ACTIVE);
        break;
      case MenuOptions.Group:
        setGroupColor(MENU_OPTION_COLOR_ACTIVE);
        break;
      case MenuOptions.Add:
        setAddColor(MENU_OPTION_COLOR_ACTIVE);
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
            changeOption(MenuOptions.Discover);
          }}
        >
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <FontAwesomeIcon
                color={discoverColor}
                size={MENU_ICON_SIZE}
                icon={faLocationDot}
              />
            </View>
            <Text style={styles.menuTxt}>Here</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            changeOption(MenuOptions.Here);
          }}
        >
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <IconPulse width={MENU_ICON_SIZE} height={MENU_ICON_SIZE} />
            </View>
            <Text style={styles.menuTxt}>Pulse</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            changeOption(MenuOptions.Group);
          }}
        >
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <IconGroupNear
                width={MENU_ICON_SIZE}
                height={MENU_ICON_SIZE}
                color={groupColor}
              />
            </View>
            <Text style={styles.menuTxt}>Group</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Add")}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <FontAwesomeIcon
                color={addColor}
                size={MENU_ICON_SIZE}
                icon={faPlus}
              />
            </View>
            <View>
              <Text style={[styles.menuTxt]}>Add</Text>
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

import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { MENU_ICON_SIZE } from "./constants";
import { styles } from "./styles";

interface MenuProps {
  data: "";
}

const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuIconsContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Avatar
              bg="gray.300"
              alignSelf="center"
              size="sm"
              source={{
                uri: "",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesomeIcon
              color="black"
              size={MENU_ICON_SIZE}
              icon={faLocationDot}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesomeIcon
              color="black"
              size={MENU_ICON_SIZE}
              icon={faPlus}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesomeIcon
              color="black"
              size={MENU_ICON_SIZE}
              icon={faBookmark}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesomeIcon
              color="black"
              size={MENU_ICON_SIZE}
              icon={faMessage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator}></View>
      </View>
    </View>
  );
};

export default Menu;

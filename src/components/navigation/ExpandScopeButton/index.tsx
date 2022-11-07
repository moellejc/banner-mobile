import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { ICON_SIZE } from "./constants";
import { styles } from "./styles";

const ExpandScopeButton = () => {
  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => console.log("left pressed")}
    >
      <FontAwesomeIcon color="black" size={ICON_SIZE} icon={faBars} />
    </TouchableOpacity>
  );
};

export default ExpandScopeButton;

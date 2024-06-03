import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { ICON_SIZE } from "./constants";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const LeftChevNavButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => navigation.goBack()}
    >
      <FontAwesomeIcon color="black" size={ICON_SIZE} icon={faChevronLeft} />
    </TouchableOpacity>
  );
};

export default LeftChevNavButton;

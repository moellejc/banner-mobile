import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ICON_SIZE } from "./constants";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const RightChevNavButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => navigation.goBack()}
    >
      <FontAwesomeIcon color="black" size={ICON_SIZE} icon={faChevronRight} />
    </TouchableOpacity>
  );
};

export default RightChevNavButton;

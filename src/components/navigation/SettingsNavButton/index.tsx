import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { ICON_SIZE } from "./constants";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const SettingsNavButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => navigation.navigate("Settings")}
    >
      <FontAwesomeIcon color="black" size={ICON_SIZE} icon={faGear} />
    </TouchableOpacity>
  );
};

export default SettingsNavButton;

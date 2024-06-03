import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ICON_SIZE } from "./constants";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const SearchNavButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => navigation.navigate("Search")}
    >
      <FontAwesomeIcon
        color="black"
        size={ICON_SIZE}
        icon={faMagnifyingGlass}
      />
    </TouchableOpacity>
  );
};

export default SearchNavButton;

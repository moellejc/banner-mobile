import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ICON_SIZE } from "./constants";
import { styles } from "./styles";

const SearchNavButton = () => {
  return (
    <TouchableOpacity onPress={() => console.log("right pressed")}>
      <FontAwesomeIcon
        color="black"
        size={ICON_SIZE}
        icon={faMagnifyingGlass}
      />
    </TouchableOpacity>
  );
};

export default SearchNavButton;

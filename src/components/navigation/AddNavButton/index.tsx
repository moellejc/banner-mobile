import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { ICON_SIZE } from "./constants";
import { styles } from "./styles";

const AddNavButton = () => {
  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => console.log("add button pressed")}
    >
      <FontAwesomeIcon color="black" size={ICON_SIZE} icon={faPlus} />
    </TouchableOpacity>
  );
};

export default AddNavButton;

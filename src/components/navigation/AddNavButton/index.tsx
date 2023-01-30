import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { ICON_SIZE } from "./constants";
import { styles } from "./styles";

const AddNavButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => navigation.navigate("Add")}
    >
      <FontAwesomeIcon color="black" size={ICON_SIZE} icon={faPlus} />
    </TouchableOpacity>
  );
};

export default AddNavButton;

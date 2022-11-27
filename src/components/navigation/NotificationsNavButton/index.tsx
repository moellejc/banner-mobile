import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { ICON_SIZE } from "./constants";
import { styles } from "./styles";

const NotificationsNavButton = () => {
  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => console.log("notifications pressed")}
    >
      <FontAwesomeIcon color="black" size={ICON_SIZE} icon={faBell} />
    </TouchableOpacity>
  );
};

export default NotificationsNavButton;

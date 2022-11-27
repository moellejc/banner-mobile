import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "native-base";
import { styles } from "./styles";
import { createUser } from "../../../tests/data";

const profileUser = createUser();

const ProfileNavButton = () => {
  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() => console.log("profile nav pressed")}
    >
      <Avatar
        bg="black"
        alignSelf="center"
        size="sm"
        source={{
          uri: profileUser.avatar,
        }}
      >
        {`${profileUser.firstName.charAt(0)}${profileUser.lastName.charAt(0)}`}
      </Avatar>
    </TouchableOpacity>
  );
};

export default ProfileNavButton;

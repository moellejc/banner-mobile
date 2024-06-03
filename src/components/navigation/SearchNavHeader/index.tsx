import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Input, useTheme } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./styles";
import { ICON_SIZE } from "./constants";
import { VisibilityStates } from "../../../types";
import { connect } from "react-redux";
import { RootState, Actions, store } from "../../../state";

interface SearchNavHeaderProps {}

const SearchNavHeaderNav = () => {
  const searchTerm = useRef("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          // w={{
          //   base: "75%",
          //   md: "25%",
          // }}
          w={"100%"}
          size={"lg"}
          fontSize={"lg"}
          color={"black"}
          variant="unstyled"
          InputLeftElement={
            <FontAwesomeIcon
              color="black"
              size={ICON_SIZE}
              icon={faMagnifyingGlass}
            />
          }
          placeholder="Search for something..."
        />
      </View>
    </View>
  );
};

export default SearchNavHeaderNav;

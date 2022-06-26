import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { styles } from "./styles";

type SearchProps = {};
const SearchScreen: React.FC = () => {
  return (
    <View>
      <Text>Search Screen</Text>
      <SharedElement id={`SearchIcon`}>
        <Image
          source={require("../../../assets/images/icon-explore-black.png")}
          resizeMode={"cover"}
          resizeMethod={"resize"}
          style={styles.searchIcon}
        />
      </SharedElement>
    </View>
  );
};

export default SearchScreen;

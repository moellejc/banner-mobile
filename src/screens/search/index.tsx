import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./styles";

type SearchProps = {};
const SearchScreen = () => {
  return (
    <View>
      <Text>Search Screen</Text>
      <Image
        source={require("../../../assets/images/icon-explore-black.png")}
        resizeMode={"cover"}
        resizeMethod={"resize"}
        style={styles.searchIcon}
      />
    </View>
  );
};

export default SearchScreen;

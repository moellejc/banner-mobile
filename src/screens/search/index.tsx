import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

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

const styles = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    left: 20,
    top: 50,
    width: 30,
    height: 30,
  },
});

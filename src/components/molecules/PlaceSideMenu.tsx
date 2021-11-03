import React, { useRef, useEffect } from "react";
import {
  View,
  Pressable,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { UserIcon } from "./UserIcon";

type PlaceSideMenuProps = {};

export const PlaceSideMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuItem}>
        <UserIcon />
      </View>
      <View style={styles.menuItem}>
        <Pressable>
          <Image
            source={require("../../../assets/images/icon-feed-white.png")}
          />
          <Text>Feed</Text>
        </Pressable>
      </View>
      <View style={styles.menuItem}>
        <Pressable>
          <Image
            source={require("../../../assets/images/icon-shopping-bag.png")}
          />
          <Text>Order</Text>
        </Pressable>
      </View>
      <View style={styles.menuItem}>
        <Pressable>
          <Image
            source={require("../../../assets/images/icon-shopping-bag.png")}
          />
          <Text>Pickup</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  menuItem: {
    width: 50,
    height: 50,
  },
});

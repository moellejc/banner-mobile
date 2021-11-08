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
import { UserIcon, UserIconSizes } from "./UserIcon";

type PlaceSideMenuProps = {
  style?: ViewStyle;
};

const defaultProps: PlaceSideMenuProps = {
  style: StyleSheet.create({}),
};

export const PlaceSideMenu = (props: PlaceSideMenuProps) => {
  props = { ...defaultProps, ...props };
  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.menuItem, { marginTop: 30 }]}>
        <UserIcon size={UserIconSizes.SMALL} />
      </View>
      <View style={styles.menuItem}>
        <Pressable>
          <Image
            style={styles.menuItemImage}
            source={require("../../../assets/images/icon-feed-white.png")}
          />
          <Text style={styles.menuItemText}>Feed</Text>
        </Pressable>
      </View>
      <View style={styles.menuItem}>
        <Pressable>
          <Image
            style={styles.menuItemImage}
            source={require("../../../assets/images/icon-shopping-bag.png")}
          />
          <Text style={styles.menuItemText}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.menuItem}>
        <Pressable>
          <Image
            style={styles.menuItemImage}
            source={require("../../../assets/images/icon-shopping-bag.png")}
          />
          <Text style={styles.menuItemText}>Pickup</Text>
        </Pressable>
      </View>
      <Image
        style={styles.background}
        source={require("../../../assets/images/place-side-menu-background.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    bottom: 150,
    width: 75,
    zIndex: 1000,
  },
  menuItem: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "purple",
  },
  menuItemImage: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  menuItemText: {
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    right: -10,
    bottom: 0,
    width: 75,
    zIndex: -1,
    resizeMode: "stretch",
  },
});

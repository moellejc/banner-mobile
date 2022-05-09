import React from "react";
import {
  findNodeHandle,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  PanResponder,
  ListRenderItem,
} from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { IPlace } from "./PlaceModel";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

interface PlaceHeaderProps {
  place: IPlace;
  y: Animated.Value<number>;
}
export const PlaceHeader = ({ place, y }: PlaceHeaderProps) => {
  return (
    <View>
      {/* place header */}
      <View style={style.headerContainer}>
        <View style={style.headerTitles}>
          <Text style={style.organizationTitle}>Chipotle, inc.</Text>
          <Text style={style.title}>West Chest Chipotle</Text>
        </View>
        <View>
          <Text style={style.hours}>Closed - Opens at 10:45am</Text>
        </View>
        <View style={style.actionMenu}>
          <View style={style.actionMenuItem}>
            <Image
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={require("../../../assets/images/icon-save-white.png")}
              style={style.actionMenuItemIcon}
            />
          </View>
          <View style={style.actionMenuItem}>
            <Image
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={require("../../../assets/images/icon-share-white.png")}
              style={style.actionMenuItemIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  headerContainer: {
    height: 100,
  },
  headerTitles: {
    height: 50,
  },
  organizationTitle: {
    textTransform: "uppercase",
    color: "#9D9D9D",
    fontSize: 18,
    marginBottom: 5,
  },
  title: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  hours: {
    color: "black",
    fontSize: 18,
  },
  actionMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 44,
    backgroundColor: "red",
  },
  actionMenuItem: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(216,216,216,0.16)",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },
  actionMenuItemIcon: {
    width: 20,
    height: 20,
  },
});

import React from "react";
// import { useMutation } from "@apollo/client";
import {
  findNodeHandle,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Animated,
  PanResponder,
  ListRenderItem,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

type PlaceProps = {};
export const Place = ({}: PlaceProps) => {
  React.useEffect(() => {}, []);

  return (
    <View style={placeStyle.container}>
      <View style={placeStyle.backgroundContainer}>
        <Image
          source={require("../../../assets/images/mock-images/Chipotle-01.jpeg")}
          resizeMode={"cover"}
          resizeMethod={"resize"}
          style={placeStyle.backgroundImage}
        />
        <LinearGradient
          colors={["black", "transparent"]}
          start={[0, 1]}
          end={[0, 0.25]}
          style={placeStyle.headerBackground}
        ></LinearGradient>
      </View>

      {/* place header */}
      <View style={placeStyle.headerContainer}>
        <View>
          <Text style={placeStyle.organizationTitle}>Chipotle, inc.</Text>
          <Text style={placeStyle.title}>West Chest Chipotle</Text>
        </View>
        <View>
          <Text style={placeStyle.hours}>Closed - Opens at 10:45am</Text>
        </View>
        <View style={placeStyle.actionMenu}>
          <View style={placeStyle.actionMenuItem}>
            <Image
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={require("../../../assets/images/icon-save-white.png")}
              style={placeStyle.actionMenuItemIcon}
            />
          </View>
          <View style={placeStyle.actionMenuItem}>
            <Image
              resizeMethod={"resize"}
              resizeMode={"contain"}
              source={require("../../../assets/images/icon-share-white.png")}
              style={placeStyle.actionMenuItemIcon}
            />
          </View>
        </View>
      </View>

      {/* place services */}
      <View style={servicesStyle.container}>
        <View style={servicesStyle.serviceItem}>
          <Image
            resizeMethod={"resize"}
            resizeMode={"contain"}
            source={require("../../../assets/images/icon-phone-black.png")}
            style={servicesStyle.serviceItemIcon}
          />
        </View>
        <View style={servicesStyle.serviceItem}>
          <Image
            resizeMethod={"resize"}
            resizeMode={"contain"}
            source={require("../../../assets/images/icon-dining-black.png")}
            style={servicesStyle.serviceItemIcon}
          />
        </View>
        <View style={servicesStyle.serviceItem}>
          <Image
            resizeMethod={"resize"}
            resizeMode={"contain"}
            source={require("../../../assets/images/icon-delivery-black.png")}
            style={servicesStyle.serviceItemIcon}
          />
        </View>
        <View style={servicesStyle.serviceItem}>
          <Image
            resizeMethod={"resize"}
            resizeMode={"contain"}
            source={require("../../../assets/images/icon-help-black.png")}
            style={servicesStyle.serviceItemIcon}
          />
        </View>
        <View style={servicesStyle.serviceItemText}>
          <Text style={servicesStyle.serviceItemFollowers}>1.2m followers</Text>
        </View>
      </View>
    </View>
  );
};

const placeStyle = StyleSheet.create({
  container: {
    height: 100,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight * 0.8,
  },
  backgroundImage: {
    width: windowWidth,
    height: "100%",
  },
  headerContainer: {
    height: 100,
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
  },
  headerTitles: {},
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  organizationTitle: {
    textTransform: "uppercase",
    color: "#9D9D9D",
    fontSize: 18,
    marginBottom: 5,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  hours: {
    color: "white",
    fontSize: 18,
  },
  actionMenu: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 44,
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

const servicesStyle = StyleSheet.create({
  container: {
    height: 32,
    position: "absolute",
    bottom: 110,
    left: 0,
    right: 0,
    flexDirection: "row",
  },
  serviceItem: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginRight: 5,
  },
  serviceItemText: {
    height: 32,
    justifyContent: "center",
  },
  serviceItemIcon: {
    width: 18,
    height: 18,
  },
  serviceItemFollowers: {
    color: "white",
    fontSize: 14,
  },
});

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
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Actions } from "../../state";
import { Services } from "../../services/index";
import { GRAY_MEDIUM, WHITE, GRAY_LIGHT } from "../../constants/styles/Colors";
import { NativeRouter } from "react-router-native";
import { Place } from "../place/Place";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const profileImg = require("../../../assets/images/mock-images/test_profile_img_01.png");
const searchIconImg = require("../../../assets/images/icon-search.png");
const hereIconImg = require("../../../assets/images/icon-location-white.png");
const trendingIconImg = require("../../../assets/images/icon-flame-white.png");
const celebsIconImg = require("../../../assets/images/icon-celebrity-white.png");

const FeedMenuData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    type: "profile",
    title: "Joe Moeller",
    icon: profileImg,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    type: "search",
    title: "search",
    icon: searchIconImg,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    type: "filter",
    title: "Here",
    icon: hereIconImg,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    type: "filter",
    title: "Trending",
    icon: trendingIconImg,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    type: "filter",
    title: "Celebs",
    icon: celebsIconImg,
  },
];

type FeedMenuItemProps = {
  id: string;
  type: string;
  title: string;
  icon: any;
};
const FeedMenuFilterItem = (props: FeedMenuItemProps) => (
  <TouchableOpacity style={feedMenuStyle.feedMenuItem}>
    <Image
      resizeMethod={"resize"}
      resizeMode={"contain"}
      style={feedMenuStyle.feedMenuItemIcon}
      source={props.icon}
    />
    <Text style={feedMenuStyle.filterItemText}>{props.title}</Text>
  </TouchableOpacity>
);

const renderFeedMenuItem: ListRenderItem<FeedMenuItemProps> = ({ item }) => {
  switch (item.type) {
    case "profile":
      return (
        <TouchableOpacity
          style={[
            feedMenuStyle.feedMenuItem,
            feedMenuStyle.feedMenuItemIconProfile,
          ]}
        >
          <Image
            resizeMethod={"resize"}
            resizeMode={"contain"}
            style={feedMenuStyle.feedMenuItemIcon}
            source={profileImg}
          />
        </TouchableOpacity>
      );
    case "search":
      return (
        <TouchableOpacity style={feedMenuStyle.feedMenuItem}>
          <Image
            resizeMethod={"resize"}
            resizeMode={"contain"}
            style={feedMenuStyle.feedMenuItemIcon}
            source={searchIconImg}
          />
        </TouchableOpacity>
      );
    case "filter":
      return <FeedMenuFilterItem {...item} />;
    default:
      break;
  }

  return <View></View>;
};

type FeedScreenProps = {};
export const FeedScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={feedStyle.container}>
      {/* place background */}
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

      {/* feed menu */}
      <View style={feedMenuStyle.container}>
        <FlatList
          data={FeedMenuData}
          renderItem={renderFeedMenuItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          style={feedMenuStyle.menuList}
        />
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

const feedMenuHeight = 24;
const feedMenuStyle = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    height: feedMenuHeight,
  },
  menuList: {
    height: feedMenuHeight,
  },
  feedMenuItem: {
    height: feedMenuHeight,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  feedMenuItemIcon: {
    height: feedMenuHeight,
    width: feedMenuHeight,
  },
  feedMenuItemIconProfile: {
    borderRadius: feedMenuHeight / 2,
    backgroundColor: "green",
  },
  filterItemText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

const feedStyle = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
});

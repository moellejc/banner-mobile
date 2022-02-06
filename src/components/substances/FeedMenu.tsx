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

type FeedMenuProps = {};
export const FeedMenu: React.FC = ({}: FeedMenuProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
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
  );
};

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

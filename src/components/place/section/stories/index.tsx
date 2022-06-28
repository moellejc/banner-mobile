import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  SafeAreaView,
  FlatList,
  SectionList,
  StatusBar,
} from "react-native";
import { UserIcon, UserIconSizes } from "../../../user/icon";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const StoriesData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-98a7ds9fp8",
    title: "First Story",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-9a8sdyfnp9ua",
    title: "Second Story",
  },
  {
    id: "58694a0f-3da1-471f-bd96-fhiludhdfg",
    title: "Third Story",
  },
  {
    id: "58694a0f-3da1-471f-bd96-aiusydnfhmjk",
    title: "Fourth Story",
  },
  {
    id: "58694a0f-3da1-471f-bd96-qw8e7nufasd",
    title: "Fifth Story",
  },
];

export const PlaceStoriesHeader = () => (
  <View style={styles.headerContainer}>
    <View style={styles.title}>
      <Text style={styles.titleTxt}>Stories</Text>
    </View>
    <View style={styles.subheader}>
      <Text style={styles.subheaderTxt}>Stories from today</Text>
    </View>
  </View>
);

const PlaceStory = () => (
  <View style={styles.storyContainer}>
    <View style={styles.storyPerson}>
      <UserIcon size={UserIconSizes.SMALL} />
    </View>
  </View>
);
export const PlaceStoriesContent = () => (
  <View>
    <FlatList
      data={StoriesData}
      horizontal={true}
      renderItem={PlaceStory}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {},

  headerContainer: {},
  title: {},
  titleTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666666",
    textTransform: "uppercase",
  },
  subheader: {},
  subheaderTxt: {
    fontSize: 32,
    color: "#FFF",
  },
  storyContainer: {
    width: 100,
    height: 150,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  storyPerson: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});

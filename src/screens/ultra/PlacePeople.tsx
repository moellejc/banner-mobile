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

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const PeopleData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Person",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Person",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Person",
  },
  {
    id: "58694a0f-3da1-471f-bd96-a8sdfyoiuasdf",
    title: "Fourth Person",
  },
  {
    id: "58694a0f-3da1-471f-bd96-a8sydbfiuyasf",
    title: "Fifth Person",
  },
  {
    id: "58694a0f-3da1-471f-bd96-uaisdhfoiuyagh",
    title: "Sixth Person",
  },
  {
    id: "58694a0f-3da1-471f-bd96-872638rbnwmefd",
    title: "Seventh Person",
  },
];

export const PlacePeopleHeader = () => (
  <View style={styles.headerContainer}>
    <View style={styles.title}>
      <Text style={styles.titleTxt}>People</Text>
    </View>
    <View style={styles.subheader}>
      <Text style={styles.subheaderTxt}>Who's Here</Text>
    </View>
  </View>
);

const PlacePerson = () => (
  <View style={styles.personContainer}>
    <View style={styles.personPhoto}></View>
  </View>
);

export const PlacePeopleContent = () => (
  <View>
    <FlatList
      data={PeopleData}
      horizontal={true}
      renderItem={PlacePerson}
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
  personContainer: {
    width: 64,
    height: 64,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  personPhoto: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "blue",
    borderColor: "black",
  },
});

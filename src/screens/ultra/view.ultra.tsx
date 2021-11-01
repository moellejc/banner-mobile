import { AnyTypeAnnotation, identifier } from "@babel/types";
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
import { margin } from "../../constants/styles/Mixins";
import { PlaceHeader } from "./PlaceHeader";
import { PlacePeopleHeader, PlacePeopleContent } from "./PlacePeople";
import { PlaceStoriesHeader, PlaceStoriesContent } from "./PlaceStories";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const FEED_TOP_START = WINDOW_HEIGHT * 0.33 + 80;

enum PlaceFeedSections {
  HEAD = 1,
  PEOPLE = 2,
  STORIES = 3,
  POSTS = 4,
}
type SectionInfo = {
  id: PlaceFeedSections;
  title: string;
  data: string[];
};
const SectionData = [
  {
    id: PlaceFeedSections.PEOPLE,
    title: "People",
    data: ["Pizza"],
  },
  {
    id: PlaceFeedSections.STORIES,
    title: "Stories",
    data: ["French Fries"],
  },
];

const EmptySection = () => <View></View>;

const chooseSectionHeader = (sectionID: PlaceFeedSections): React.ReactNode => {
  switch (sectionID) {
    case PlaceFeedSections.PEOPLE:
      return <PlacePeopleHeader />;
    case PlaceFeedSections.STORIES:
      return <PlaceStoriesHeader />;
    default:
      return <EmptySection />;
  }
};

const chooseSection = (sectionID: PlaceFeedSections): React.ReactNode => {
  switch (sectionID) {
    case PlaceFeedSections.PEOPLE:
      return <PlacePeopleContent />;
    case PlaceFeedSections.STORIES:
      return <PlaceStoriesContent />;
    default:
      return <EmptySection />;
  }
};

type UltraAppProps = {};
export const UltraApp: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PlaceHeader />

      <SectionList
        style={[styles.placeFeedContainer]}
        sections={SectionData}
        keyExtractor={(item, index) => `id-${item}-${index}`}
        renderSectionHeader={({ section: { id } }) => {
          return (
            <View style={styles.placeFeedSectionHeader}>
              {chooseSectionHeader(id)}
            </View>
          );
        }}
        renderItem={({ item, section }) => {
          return (
            <View style={styles.placeFeedSection}>
              {chooseSection(section.id)}
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  placeFeedContainer: {
    position: "absolute",
    top: FEED_TOP_START,
  },
  placeFeedSectionHeader: {
    marginBottom: 10,
  },
  placeFeedSection: {
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
  },
});

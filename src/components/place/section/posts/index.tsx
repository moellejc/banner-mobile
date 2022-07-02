import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createPosts, Post } from "../../../../tests/data";
import {
  faBurger,
  faBellConcierge,
  faLifeRing,
  faGolfBallTee,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const postsData = createPosts(10);

interface PlacePostsSectionProps {}

const PlacePostsSection = () => {
  return (
    <View style={styles.container}>
      <TitleSection
        primaryTitle="Talkin' about Topgolf"
        secondaryTitle="Posts"
      />
    </View>
  );
};

export default PlacePostsSection;

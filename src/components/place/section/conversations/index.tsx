import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBurger,
  faBellConcierge,
  faLifeRing,
  faGolfBallTee,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faker } from "@faker-js/faker";

interface PlaceConversationsSectionProps {}

const PlaceConversationsSection = () => {
  return (
    <View style={styles.container}>
      <TitleSection
        primaryTitle="Talkin' about Topgolf"
        secondaryTitle="Conversations"
      />
    </View>
  );
};

export default PlaceConversationsSection;

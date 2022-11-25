import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import { styles } from "./styles";
import { Avatar } from "native-base";
import { createUsers, User } from "../../../../tests/data";

const peopleData = createUsers(15);

interface PlaceNearbySectionProps {}

const PlaceNearbySection = () => {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <TitleSection smallTitle="People" style={{ paddingHorizontal: 10 }} />
      {/* Section Content */}
    </View>
  );
};

export default PlaceNearbySection;

import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface PlaceConversationsSectionProps {}

const PlaceConversationsSection = () => {
  return (
    <View style={styles.container}>
      <Text>Place Conversations</Text>
    </View>
  );
};

export default PlaceConversationsSection;

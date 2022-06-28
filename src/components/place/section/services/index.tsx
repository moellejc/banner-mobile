import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface PlaceServicesSectionProps {}

const PlaceServicesSection = () => {
  return (
    <View style={styles.container}>
      <Text>Place Services</Text>
    </View>
  );
};

export default PlaceServicesSection;

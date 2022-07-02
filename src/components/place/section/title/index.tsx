import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface TitleSectionProps {
  primaryTitle: string;
  secondaryTitle: string;
  style?: any;
}

const TitleSection = ({
  primaryTitle,
  secondaryTitle,
  style,
}: TitleSectionProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.secondaryTitle}>{secondaryTitle}</Text>
      <Text style={styles.primaryTitle}>{primaryTitle}</Text>
    </View>
  );
};

export default TitleSection;

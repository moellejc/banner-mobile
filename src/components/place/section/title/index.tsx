import React, { useEffect, useRef, ReactElement } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface TitleSectionProps {
  largeTitle?: string;
  smallTitle?: string;
  style?: any;
}

const TitleSection = ({ largeTitle, smallTitle, style }: TitleSectionProps) => {
  return (
    <View style={[styles.container, style]}>
      {smallTitle && <Text style={styles.secondaryTitle}>{smallTitle}</Text>}
      {largeTitle && <Text style={styles.primaryTitle}>{largeTitle}</Text>}
    </View>
  );
};

export default TitleSection;

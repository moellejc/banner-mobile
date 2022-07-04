import React, { useEffect, useRef, ReactElement } from "react";
import { View } from "react-native";
import { Place as PlaceData } from "../../../tests";
import PlacePostsSection from "./posts";
import PlaceHeaderSection from "./header";
import PlaceServicesSection from "./services";
import { styles } from "./styles";

interface PlaceSectionProps {
  place: PlaceData;
  category: string;
}

const sectionCategoryHandler = (
  category: string,
  place: PlaceData
): ReactElement => {
  switch (category) {
    case "header":
      return <PlaceHeaderSection place={place} />;
    case "services":
      return <PlaceServicesSection />;
    case "posts":
      return <PlacePostsSection />;
    default:
      break;
  }

  return <View></View>;
};

const PlaceSection = ({ place, category }: PlaceSectionProps) => {
  useEffect(() => {
    console.log(`Section: ${category}`);
  }, []);

  return (
    <View style={styles.container}>
      {sectionCategoryHandler(category, place)}
    </View>
  );
};

export default PlaceSection;

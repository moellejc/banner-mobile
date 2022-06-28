import React, { useEffect, useRef, ReactElement } from "react";
import { View } from "react-native";
import { IPlace } from "../_place/model";
import PlaceConversationsSection from "./conversations";
import PlaceHeaderSection from "./header";
import PlaceServicesSection from "./services";
import { styles } from "./styles";

interface PlaceSectionProps {
  place: IPlace;
  category: string;
}

const sectionCategoryHandler = (category: string): ReactElement => {
  switch (category) {
    case "header":
      return <PlaceHeaderSection />;
    case "services":
      return <PlaceServicesSection />;
    case "conversations":
      return <PlaceConversationsSection />;
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
    <View style={styles.container}>{sectionCategoryHandler(category)}</View>
  );
};

export default PlaceSection;

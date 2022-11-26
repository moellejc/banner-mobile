import React, { useEffect, useRef, ReactElement } from "react";
import { View } from "react-native";
import { Place as PlaceData } from "../../../tests";
import PlacePostsSection from "./posts";
import PlaceHeaderSection from "./header";
import PlaceServicesSection from "./services";
import PlacePeopleSection from "./people";
import PlaceNearbySection from "./nearby";
import PlaceTicketsSection from "./tickets";
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
    case "people":
      return <PlacePeopleSection />;
    case "nearby":
      return <PlaceNearbySection place={place} />;
    case "tickets":
      return <PlaceTicketsSection />;
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

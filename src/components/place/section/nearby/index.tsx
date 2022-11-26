import React, { useEffect, useRef, ReactElement } from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import TitleSection from "../title";
import { styles, stylesCard } from "./styles";
import { Avatar } from "native-base";
import { createUsers, User } from "../../../../tests/data";
import { Place as PlaceData } from "../../../../tests";

const peopleData = createUsers(15);

interface PlaceNearbySectionProps {
  place: PlaceData;
}

const PlaceNearbySection = ({ place }: PlaceNearbySectionProps) => {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <TitleSection smallTitle="Near By" />
      {/* Section Content */}
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEventThrottle={16}
          style={styles.nearyByList}
          data={place.nearBy}
          contentOffset={{ x: 0, y: 0 }}
          keyExtractor={(item: PlaceData) => `${item.id}`}
          renderItem={(item) => <NearyByCard place={item.item} />}
        />
      </View>
    </View>
  );
};

interface NearByCardProps {
  place: PlaceData;
}
const NearyByCard = ({ place }: PlaceNearbySectionProps) => {
  return (
    <TouchableOpacity>
      <View style={stylesCard.container}>
        <View style={stylesCard.cardImageContainer}>
          <Image
            style={stylesCard.cardImage}
            resizeMode={"cover"}
            source={{ uri: place.coverImageURL }}
          />
        </View>
        <View style={stylesCard.titleContainer}>
          <Text style={stylesCard.titleTxt}>{place.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceNearbySection;

import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  ListRenderItem,
} from "react-native";
import Animated, { useSharedValue, SharedValue } from "react-native-reanimated";
import { IPlace, BANNER_PLACE_POSITIONS, IPlaceSection } from "./model";
import { CollapseStates } from "../../../types/";
import { connect } from "react-redux";
import { RootState, Actions, store } from "../../../state";
import { useDispatch } from "react-redux";
import { PlacesActions } from "../../../state/actions";
import { PlaceScreens } from "../../../types/Misc";
import { styles } from "./styles";
import PlaceSection from "../section";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

const { Value } = Animated;

const currentPlace: IPlace = {
  id: "89a7hsdf87has98df",
  name: "Topgolf",
  category: "Entertainment",
  hours: "10a - 11p",
  favorites: 50000,
  totalPeopleHere: "200 - 300",
  backgroundImageURL: "",
  services: [],
  sections: [
    {
      id: "header",
      title: "",
    },
    {
      id: "services",
      title: "SERVICES",
    },
    {
      id: "posts",
      title: "POSTS",
    },
  ],
};

interface PlaceProps {
  bannerPlaceY: SharedValue<number>;
}

const Place = ({ bannerPlaceY }: PlaceProps) => {
  const y = new Value(0);
  const panDownY = useSharedValue(0);
  const bannerPlaceScrollRef = useRef<FlatList>(null);
  const dispatch = useDispatch();

  const handleScroll = (y: number) => {
    bannerPlaceY.value = y;
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={bannerPlaceScrollRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        scrollEventThrottle={16}
        onScroll={(event) => {
          handleScroll(event.nativeEvent.contentOffset.y);
        }}
        style={styles.scrollContainerPlace}
        data={currentPlace.sections}
        keyExtractor={(item: IPlaceSection) => `${item.id}`}
        renderItem={(item) => (
          <PlaceSection place={currentPlace} category={item.item.id} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    goToPlaceScreen: state.places.goToPlaceScreen,
  };
};

export default connect(mapStateToProps)(Place);

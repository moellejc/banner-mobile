import React from "react";
import {
  View,
  FlatList,
  ListRenderItem,
  Animated,
  Dimensions,
} from "react-native";
import { PlaceMenu, PlaceMenuData } from "../molecules/PlaceMenu";
import { PlaceOption } from "./PlaceOption";
import { getCurrentPlaceOptions } from "../../services/place.service";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

// const placeMenuOptions: { [name: string]: string } = {
//   place: "place",
//   chat: "chat",
//   add: "add",
//   people: "people",
//   explore: "explore",
// };

// export const placeMenuData: PlaceMenuData[] = Object.keys(placeMenuOptions).map(
//   (i) => ({
//     key: i,
//     title: placeMenuOptions[i],
//     page: placeMenuOptions[i],
//   })
// );

type PlaceProps = {};
export const Place = ({}: PlaceProps) => {
  const placeMenuDataRef = React.useRef<PlaceMenuData[] | null>(null);
  const ref = React.useRef<FlatList<PlaceMenuData>>(null);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onItemPress = React.useCallback((itemIndex: number) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * screenWidth,
    });
  }, []);

  React.useEffect(() => {
    placeMenuDataRef.current = getCurrentPlaceOptions().map((i) => ({
      key: i,
      title: i,
      page: i,
    }));
  }, []);

  const extractPage: ListRenderItem<PlaceMenuData> = ({ item }) => (
    <PlaceOption key={item.key} title={item.title} />
  );

  return (
    <View>
      <Animated.FlatList
        style={{ backgroundColor: "red" }}
        ref={ref}
        data={placeMenuDataRef.current!}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.key}
        renderItem={extractPage}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <PlaceMenu
        scrollX={scrollX}
        data={placeMenuDataRef.current!}
        onItemPress={onItemPress}
      />
    </View>
  );
};

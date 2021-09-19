import React from "react";
import { Text, View, Dimensions, GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import { PlaceMenuData } from "./PlaceMenu";
import { getCurrentPlaceOptions } from "../../services/place.service";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

/**
 Tab Component
*/
type PlaceMenuTabProps = {
  key: string;
  item: PlaceMenuData;
  onItemPress: () => void;
};
export const PlaceMenuTab = React.forwardRef<View, PlaceMenuTabProps>(
  ({ key, item, onItemPress }: PlaceMenuTabProps, ref: React.ForwardedRef<View>) => {
    return (
      <TouchableOpacity key={key}
        onPress={(event: GestureResponderEvent) => onItemPress()}
      >
        <View ref={ref}>
          <Text
            style={{
              color: "white",
              fontSize: 84 / getCurrentPlaceOptions().length,
              fontWeight: "800",
              textTransform: "uppercase",
            }}
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);

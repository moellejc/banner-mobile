import React from "react";
import { useMutation } from "@apollo/client";
import { Text, View, Dimensions, GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import { PlaceMenuData } from "./PlaceMenu";
import { placeMenuData } from "../organisms/Places";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

/**
 Tab Component
*/
type PlaceMenuTabProps = {
  item: PlaceMenuData;
  onItemPress: () => void;
};
export const PlaceMenuTab = React.forwardRef<View, PlaceMenuTabProps>(
  ({ item, onItemPress }: PlaceMenuTabProps, ref: React.ForwardedRef<View>) => {
    return (
      <TouchableOpacity
        onPress={(event: GestureResponderEvent) => onItemPress()}
      >
        <View ref={ref}>
          <Text
            style={{
              color: "white",
              fontSize: 84 / placeMenuData.length,
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

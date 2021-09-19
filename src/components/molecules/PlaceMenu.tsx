import React from "react";
import { View, Animated, Dimensions } from "react-native";
import { PlaceMenuTab } from "./PlaceMenuTab";
import { PlaceMenuIndicator } from "./PlaceMenuIndicator";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

export type PlaceMenuData = {
  key: string;
  title: string;
  page: string;
};

export type PlaceMenuDimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};
type PlaceMenuDataRefs = {
  data: PlaceMenuData;
  ref: React.RefObject<View>;
};
type PlaceMenuProps = {
  menuData: PlaceMenuData[];
  scrollX: Animated.Value;
  onItemPress: (itemIndex: number) => void;
};
export const PlaceMenu = ({ menuData, scrollX, onItemPress }: PlaceMenuProps) => {
  const [measures, setMeasures] = React.useState<PlaceMenuDimensions[]>([]);
  const containerRef = React.useRef<View>(null);
  const dataItemRefs = React.useRef<PlaceMenuDataRefs[]>(
    menuData.map((item) => ({ data: item, ref: React.createRef<View>() }))
  );
  React.useEffect(() => {
    const m: PlaceMenuDimensions[] = [];

    dataItemRefs.current.forEach((item) => {
      if (item.ref !== null && item.ref.current !== null) {
        item.ref.current.measureLayout(
          containerRef.current as any,
          (x, y, width, height) => {
            m.push({ x, y, width, height });
            if (m.length === dataItemRefs.current.length) {
              setMeasures(m);
            }
          },
          () => {
            console.log("measure layout failed");
          }
        );
      }
    });
  });

  return (
    <View style={{ position: "absolute", top: 100, width: screenWidth }}>
      <View
        ref={containerRef}
        style={{
          justifyContent: "space-evenly",
          flex: 1,
          flexDirection: "row",
        }}
      >
        {dataItemRefs.current.map((item, index) => {
          return (
            <PlaceMenuTab
              key={item.data.key}
              item={item.data}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <PlaceMenuIndicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

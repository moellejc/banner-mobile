import React from "react";
import { useMutation } from "@apollo/client";
import {
  findNodeHandle,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
  ListRenderItem,
  HostComponent,
  GestureResponderEvent,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Actions } from "../../state";
import { Services } from "../../services/index";
import { FeedSkeletonLoader } from "../../components/atoms/FeedSkeletonLoader";
import { GRAY_MEDIUM, WHITE, GRAY_LIGHT } from "../../constants/styles/Colors";
import { NativeRouter } from "react-router-native";
import { TouchableOpacity } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

type PageData = {
  key: string;
  title: string;
  page: string;
};
const pages: { [name: string]: string } = {
  place: "place",
  chat: "chat",
  add: "add",
  people: "people",
  explore: "explore",
};

const pageData: PageData[] = Object.keys(pages).map((i) => ({
  key: i,
  title: pages[i],
  page: pages[i],
}));

/**
 Tab Component
*/
type TabProps = {
  item: PageData;
  onItemPress: () => void;
};
const Tab = React.forwardRef<View, TabProps>(
  ({ item, onItemPress }: TabProps, ref: React.ForwardedRef<View>) => {
    return (
      <TouchableOpacity
        onPress={(event: GestureResponderEvent) => onItemPress()}
      >
        <View ref={ref}>
          <Text
            style={{
              color: "white",
              fontSize: 84 / pageData.length,
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

/**
 Tabs Component
*/
type TabsProps = {
  data: PageData[];
  scrollX: Animated.Value;
  onItemPress: (itemIndex: number) => void;
};
type TabDimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};
type TabDataRefs = {
  data: PageData;
  ref: React.RefObject<View>;
};
const Tabs = ({ data, scrollX, onItemPress }: TabsProps) => {
  const [measures, setMeasures] = React.useState<TabDimensions[]>([]);
  const containerRef = React.useRef<View>(null);
  const dataItemRefs = React.useRef<TabDataRefs[]>(
    data.map((item) => ({ data: item, ref: React.createRef<View>() }))
  );
  React.useEffect(() => {
    const m: TabDimensions[] = [];

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
            <Tab
              key={item.data.key}
              item={item.data}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

/**
 Indicator Component
*/
type IndicatorProps = {
  measures: TabDimensions[];
  scrollX: Animated.Value;
};
const Indicator = ({ measures, scrollX }: IndicatorProps) => {
  const inputRange = pageData.map((_, i) => i * screenWidth);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });
  console.log(indicatorWidth);
  return (
    <Animated.View
      style={{
        position: "absolute",
        height: 4,
        left: 0,
        width: indicatorWidth,
        backgroundColor: WHITE,
        bottom: -10,
        transform: [{ translateX }],
      }}
    />
  );
};

/**
 Page Component
*/
type PageProps = {
  item: PageData;
};
/** 
const Page: React.FC = ({ item }: PageProps) => {
  return (
    <View style={pageStyle.container}>
      
      <View style={headerStyle.container}>

        <View style={headerInfoStyle.container}>
          <Text style={headerInfoStyle.title}>Topgolf</Text>
          <Text style={headerInfoStyle.address}>
            9568 Water Front Dr. West Chester, OH
          </Text>
        </View>

        <View>
          <Button>Follow</Button>
        </View>
      </View>
      <View>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};
*/

/**
 Screen Component
*/
type FeedScreenProps = {};
export const FeedScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const ref = React.useRef<FlatList<PageData>>(null);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onItemPress = React.useCallback((itemIndex: number) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * screenWidth,
    });
  }, []);

  const extractPage: ListRenderItem<PageData> = ({ item }) => (
    <View style={pageStyle.container} key={item.key}>
      <Text style={pageStyle.placeholderText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={feedRoodStyle.container}>
      {/* Search */}
      {/* <View style={searchStyle.container}></View> */}

      <Animated.FlatList
        style={{ backgroundColor: "red" }}
        ref={ref}
        data={pageData}
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
      <Tabs scrollX={scrollX} data={pageData} onItemPress={onItemPress} />
    </View>
  );
};

const headerStyle = StyleSheet.create({
  container: {},
});

const headerInfoStyle = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: WHITE,
  },
  address: {
    fontSize: 14,
    color: GRAY_LIGHT,
  },
});

const tabStyle = StyleSheet.create({
  container: {},
});

const followButtonStyle = StyleSheet.create({});

const carouselStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const pageStyle = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: screenWidth,
    height: screenHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    fontSize: 40,
    color: WHITE,
  },
});

const indicatorStyle = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
});

const searchStyle = StyleSheet.create({
  container: {},
});

const feedRoodStyle = StyleSheet.create({
  container: {},
});

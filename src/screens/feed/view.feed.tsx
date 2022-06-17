import React, { useEffect } from "react";
import {
  findNodeHandle,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Animated,
  PanResponder,
  ListRenderItem,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import Place from "../../components/place";
import BannerHeader from "../../components/header/bar";
import { CollapseStates } from "../../types";
import SearchDrawer from "../../components/search/drawer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type FeedScreenProps = {};
export const FeedScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <>
      <View style={feedStyle.container}>
        {/* place */}
        <Place />
      </View>
      <SearchDrawer />
      <BannerHeader {...{ collapseStatus: CollapseStates.Expanded }} />
    </>
  );
};

const feedStyle = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});

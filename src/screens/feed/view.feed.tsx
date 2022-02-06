import React from "react";
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
import { FeedMenu } from "../../components/substances/FeedMenu";
import { Place } from "../../components/substances/Place";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type FeedScreenProps = {};
export const FeedScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={feedStyle.container}>
      {/* place */}
      <Place />

      {/* feed menu */}
      <FeedMenu />
    </View>
  );
};

const feedStyle = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
});

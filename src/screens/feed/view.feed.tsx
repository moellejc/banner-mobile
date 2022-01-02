import React from "react";
// import { useMutation } from "@apollo/client";
import {
  findNodeHandle,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Actions } from "../../state";
import { Services } from "../../services/index";
import { GRAY_MEDIUM, WHITE, GRAY_LIGHT } from "../../constants/styles/Colors";
import { NativeRouter } from "react-router-native";
import { Place } from "../place/Place";

/**
 Page Component
*/

/**
 Screen Component
*/
type FeedScreenProps = {};
export const FeedScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={feedRoodStyle.container}>
      {
        <View style={searchStyle.container}>
          <Text>Feed</Text>
        </View>
      }
      <Place />
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

const searchStyle = StyleSheet.create({
  container: {},
});

const feedRoodStyle = StyleSheet.create({
  container: {},
});

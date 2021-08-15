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
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { Actions } from "../../state";
import { Services } from "../../services/index";
import { GRAY_MEDIUM, WHITE, GRAY_LIGHT } from "../../constants/styles/Colors";
import { NativeRouter } from "react-router-native";
import { Places } from "../../components/organisms/Places";

/**
 Page Component
*/
type PageProps = {};
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

  return (
    <View style={feedRoodStyle.container}>
      {/* Search */}
      {/* <View style={searchStyle.container}></View> */}
      <Places />
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

import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import HubScreen from "../screens/hub";
import { CameraScreen } from "../screens/camera";
import AddScreen from "../screens/add";
import ProfileScreen from "../screens/profile";
import SearchScreen from "../screens/search";
import {
  createStackNavigator,
  StackCardInterpolationProps,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMagnifyingGlass,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { styles } from "./styles";
import { ICON_SIZE, SIDE_MARGIN } from "./constants";
import ExpandScopeButton from "../components/navigation/ExpandScopeButton/index";
import SearchButton from "../components/navigation/SearchButton";

const Stack = createSharedElementStackNavigator();

const screenOptions = ({ navigation }: any): StackNavigationOptions => {
  return {
    headerTitle: "",
    headerStyle: { ...styles.header },
    headerTintColor: "black",
    // headerBackTitle: "Cincinnati",
    // headerBackTitleStyle: { ...styles.leftIcon },
    headerLeft: () => <ExpandScopeButton />,
    headerRight: () => <SearchButton />,
    headerRightContainerStyle: { ...styles.rightIcon },
  };
};

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "white" },
        headerShown: true,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Hub" component={HubScreen} options={screenOptions} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

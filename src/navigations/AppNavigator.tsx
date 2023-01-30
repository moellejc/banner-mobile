import React from "react";
import { View, Text } from "react-native";
import HubScreen from "../screens/hub";
import AddScreen from "../screens/add";
import {
  createStackNavigator,
  StackCardInterpolationProps,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { styles } from "./styles";
import ProfileNavButton from "../components/navigation/ProfileNavButton";
import NotificationsButton from "../components/navigation/NotificationsNavButton";
import AddNavButton from "../components/navigation/AddNavButton";
import TitleNav from "../components/navigation/TitleNav";

const Stack = createSharedElementStackNavigator();
const AddStack = createStackNavigator();

const horizontalAnimation = {
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const screenOptions = ({ navigation }: any): StackNavigationOptions => {
  return {
    headerTitle: () => <TitleNav />,
    headerStyle: { ...styles.header },
    headerTintColor: "black",
    headerLeft: () => <ProfileNavButton />,
    headerRight: () => <AddNavButton />,
    headerRightContainerStyle: { ...styles.rightIcon },
  };
};

const AddModalScreen = () => {
  return (
    <AddStack.Navigator headerMode="none" initialRouteName="AddNav">
      <AddStack.Screen name="Add" component={AddScreen} />
    </AddStack.Navigator>
  );
};

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "white" },
        headerShown: true,
        gestureEnabled: true,
      }}
      initialRouteName="Hub"
      mode="modal"
    >
      <Stack.Screen name="Hub" component={HubScreen} options={screenOptions} />
      <Stack.Screen name="Add" component={AddModalScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

import React from "react";
import { View, Text } from "react-native";
import HubScreen from "../screens/hub";
import {
  createStackNavigator,
  StackCardInterpolationProps,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { styles } from "./styles";
import ProfileNavButton from "../components/navigation/ProfileNavButton";
import NotificationsButton from "../components/navigation/NotificationsNavButton";
import TitleNav from "../components/navigation/TitleNav";

const Stack = createSharedElementStackNavigator();

const screenOptions = ({ navigation }: any): StackNavigationOptions => {
  return {
    headerTitle: () => <TitleNav />,
    headerStyle: { ...styles.header },
    headerTintColor: "black",
    headerLeft: () => <ProfileNavButton />,
    headerRight: () => <NotificationsButton />,
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

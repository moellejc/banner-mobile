import React from "react";
import { View, Text, Animated } from "react-native";
import HubScreen from "../screens/hub";
import AddScreen from "../screens/add";
import SearchScreen from "../screens/search";
import ProfileScreen from "../screens/profile";
import SettingsScreen from "../screens/settings";
import {
  createStackNavigator,
  StackCardInterpolationProps,
  StackNavigationOptions,
  StackHeaderInterpolationProps,
} from "@react-navigation/stack";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { styles } from "./styles";
import ProfileNavButton from "../components/navigation/ProfileNavButton";
import NotificationsButton from "../components/navigation/NotificationsNavButton";
import AddNavButton from "../components/navigation/AddNavButton";
import SearchNavButton from "../components/navigation/SearchNavButton";
import SearchNavHeaderNav from "../components/navigation/SearchNavHeader";
import TitleNav from "../components/navigation/TitleNav";
import SettingsNavButton from "../components/navigation/SettingsNavButton";
import RightChevNavButton from "../components/navigation/RightChevNavButton";
import LeftChevNavButton from "../components/navigation/LeftChevNavButton";

import { Avatar } from "native-base";
import { createUser } from "../tests/data";

const profileUser = createUser();

// const Stack = createSharedElementStackNavigator();
const Stack = createStackNavigator();
const AddStack = createStackNavigator();

const forSlide = ({
  current,
  next,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                -screen.width, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};

const screenOptions = ({ navigation }: any): StackNavigationOptions => {
  return {
    headerTitle: () => <TitleNav />,
    headerStyle: { ...styles.header },
    headerTintColor: "black",
    headerLeft: () => <ProfileNavButton />,
    headerLeftContainerStyle: { ...styles.leftIcon },
    headerRight: () => <SearchNavButton />,
    headerRightContainerStyle: { ...styles.rightIcon },
  };
};

const profileHeaderOptions = ({ navigation }: any): StackNavigationOptions => {
  return {
    headerTitle: () => (
      <Avatar
        bg="black"
        alignSelf="center"
        size="sm"
        source={{
          uri: profileUser.avatar,
        }}
      >
        {`${profileUser.firstName.charAt(0)}${profileUser.lastName.charAt(0)}`}
      </Avatar>
    ),
    headerStyle: { ...styles.header },
    headerTintColor: "black",
    headerLeft: () => <SettingsNavButton />,
    headerLeftContainerStyle: { ...styles.leftIcon },
    headerRight: () => <RightChevNavButton />,
    headerRightContainerStyle: { ...styles.rightIcon },
  };
};
const settingsHeaderOptions = ({ navigation }: any): StackNavigationOptions => {
  return {
    headerTitle: () => <></>,
    headerStyle: { ...styles.header },
    headerTintColor: "black",
    headerLeft: () => <></>,
    headerRight: () => <RightChevNavButton />,
    headerRightContainerStyle: { ...styles.rightIcon },
  };
};

const searchHeaderOptions = ({ navigation }: any): StackNavigationOptions => {
  return {
    headerTitle: () => <SearchNavHeaderNav />,
    headerStyle: { ...styles.header, height: 100 },
    headerTintColor: "black",
    headerLeft: () => <LeftChevNavButton />,
    headerLeftContainerStyle: { ...styles.leftIcon },
    headerRight: () => <></>,
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
      initialRouteName="Hub"
    >
      <Stack.Screen name="Hub" component={HubScreen} options={screenOptions} />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Add"
          component={AddScreen}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          cardStyleInterpolator: forSlide,
          gestureDirection: "horizontal-inverted",
        }}
      >
        <Stack.Screen
          options={profileHeaderOptions}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={settingsHeaderOptions}
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ cardStyleInterpolator: forSlide }}>
        <Stack.Screen
          options={searchHeaderOptions}
          name="Search"
          component={SearchScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default AppNavigator;

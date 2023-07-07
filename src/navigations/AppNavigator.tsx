import React from "react";
import { View, Text } from "react-native";
import HubScreen from "../screens/hub";
import AddScreen from "../screens/add";
import SearchScreen from "../screens/search";
import ProfileScreen from "../screens/profile";
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
import SearchNavButton from "../components/navigation/SearchNavButton";
import TitleNav from "../components/navigation/TitleNav";

// const Stack = createSharedElementStackNavigator();
const Stack = createStackNavigator();
const AddStack = createStackNavigator();

const screenOptions = ({ navigation }: any): StackNavigationOptions => {
  return {
    headerTitle: () => <TitleNav />,
    headerStyle: { ...styles.header },
    headerTintColor: "black",
    headerLeft: () => <ProfileNavButton />,
    headerRight: () => <SearchNavButton />,
    headerRightContainerStyle: { ...styles.rightIcon },
  };
};

// const AddModalScreen = () => {
//   return (
//     <AddStack.Navigator
//       screenOptions={{ headerShown: false }}
//       initialRouteName="AddNav"
//     >
//       <AddStack.Screen
//         options={{ headerShown: false }}
//         name="Add"
//         component={AddScreen}
//       />
//     </AddStack.Navigator>
//   );
// };

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

      <Stack.Screen
        options={{ headerShown: true }}
        name="Search"
        component={SearchScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;

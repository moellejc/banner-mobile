import React from "react";
import FeedScreen from "../screens/feed";
import { createStackNavigator } from "@react-navigation/stack";
import AppTheme from "../styles/Theme";

const Stack = createStackNavigator();

const screenOptions = {
  title: "",
  headerStyle: {
    backgroundColor: "black",
    shadowColor: "transparent",
  },
  headerTintColor: "white",
};

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: AppTheme.colors.appBackgroundColor },
      }}
    >
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

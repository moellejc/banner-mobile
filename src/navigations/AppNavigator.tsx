import React from "react";
import { FeedScreen } from "../screens/feed";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppTheme from "../constants/styles/Theme";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
      />
    </Tab.Navigator>
  );
};

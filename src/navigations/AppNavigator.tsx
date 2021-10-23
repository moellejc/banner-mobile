import React from "react";
import {UltraApp} from "../screens/ultra"
import { createStackNavigator } from "@react-navigation/stack";
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppTheme from "../constants/styles/Theme";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

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
    <Stack.Navigator>
      <Stack.Screen
        name="Ultra"
        component={UltraApp}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

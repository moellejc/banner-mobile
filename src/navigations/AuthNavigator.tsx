import React from "react";
// import { NativeRouter, Switch, Route } from "react-router-native";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import { createStackNavigator } from "@react-navigation/stack";
import AppTheme from "../constants/styles/Theme";

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
        name="Login"
        component={LoginScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

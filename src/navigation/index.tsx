import React from "react";
// import { NativeRouter, Switch, Route } from "react-router-native";
import Login from "../modules/login/Login";
import Register from "../modules/register/Register";
import { createStackNavigator } from "@react-navigation/stack";
import AppTheme from "../theme/Theme";

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
      <Stack.Screen name="Login" component={Login} options={screenOptions} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

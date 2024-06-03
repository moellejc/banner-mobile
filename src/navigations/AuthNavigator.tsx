import React from "react";
// import { NativeRouter, Switch, Route } from "react-router-native";
import { LoginScreen } from "../screens/login";
import RegisterScreen from "../screens/register";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "native-base";

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
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.white },
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

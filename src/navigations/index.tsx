import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { isLoggedIn, logout } from "../services/auth";
import { Loader } from "../components/atoms/Loader";

let loggedIn = false;

export default () => {
  const [loginChecked, setLoginChecked] = React.useState(false);

  useEffect(() => {
    console.log("calling useEffect in index nav");
    async function fetchLoginStatus() {
      loggedIn = await isLoggedIn();
      setLoginChecked(true);
    }
    fetchLoginStatus();

    // TODO: set token in state

    // logout();
  }, []);

  const getNavigator = (): any | null => {
    if (loginChecked) return !loggedIn ? <AuthNavigator /> : <AppNavigator />;
    return <Loader />;
  };

  return <NavigationContainer>{getNavigator()}</NavigationContainer>;
};

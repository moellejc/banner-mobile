import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { isLoggedIn } from "../services/auth";

let loggedIn = false;

export default () => {
  const [loginChecked, setLoginChecked] = React.useState(false);

  useEffect(() => {
    async function fetchLoginStatus() {
      loggedIn = await isLoggedIn();
      console.log("fetched login status");
      setLoginChecked(true);
    }
    fetchLoginStatus();
  }, []);

  const getNavigator = (): any | null => {
    if (loginChecked) {
      console.log("checked login");
      console.log(`Logged In? ${loggedIn}`);
      return !loggedIn ? <AuthNavigator /> : <AppNavigator />;
    }
    console.log("NOT checked login");
    return null;
  };

  return <NavigationContainer>{getNavigator()}</NavigationContainer>;
};

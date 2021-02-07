import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { isLoggedIn } from "../services/auth";

let loggedIn = false;

export default () => {
  useEffect(() => {
    async function fetchLoginStatus() {
      loggedIn = await isLoggedIn();
      console.log(`Is user logged in: ${loggedIn}`);
    }
    fetchLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {console.log(`Is user logged in TSX: ${loggedIn}`)}
      {!loggedIn ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

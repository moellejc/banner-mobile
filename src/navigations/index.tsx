import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { useDispatch } from "react-redux";
import { store } from "../state";

export default () => {
  const [loginChecked, setLoginChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  // watch for changes in login state
  let unsubscribe = store.subscribe(() => {
    setIsLoggedIn(store.getState().auth.loginComplete);
  });

  useEffect(() => {
    // if user is logged in then render appropriate nav
    setIsLoggedIn(true);
    // setIsLoggedIn(store.getState().auth.isLoggedIn);
  }, []);

  const getNavigator = (): any | null => {
    console.log("get nav");
    return !isLoggedIn ? <AppNavigator /> : <AppNavigator />;
    // return !isLoggedIn ? <AuthNavigator /> : <AppNavigator />;

    // if (loginChecked) return !isLoggedIn ? <AppNavigator /> : <AppNavigator />; // use for testing feed
  };

  return <NavigationContainer>{getNavigator()}</NavigationContainer>;
};

import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { Loader } from "../components/atoms/Loader";
import { useDispatch } from "react-redux";
import { store } from "../state";
import { Services } from "../services";

export default () => {
  const [loginChecked, setLoginChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  // watch for changes in login state
  let unsubscribe = store.subscribe(() => {
    setIsLoggedIn(store.getState().auth.loginComplete);
  });

  useEffect(() => {
    if (loginChecked) return;

    // NOTE: this function should only be called once on app startup to load previous state
    async function fetchLoginStatus() {
      // restore info from secure storage
      await Services.restore();

      // check is user token is stored and valid
      if (await Services.TokenService.isRefreshValid()) {
        const res = await Services.TokenService.refreshAccessToken();

        // if refresh was sucessful go to feed
        if (!res) setIsLoggedIn(false);

        setIsLoggedIn(true);
      } else {
        console.log("refresh token is NOT valid");
        setIsLoggedIn(false);
      }
      setLoginChecked(true);
    }
    fetchLoginStatus();
  }, []);

  const getNavigator = (): any | null => {
    // if (loginChecked) return !isLoggedIn ? <AuthNavigator /> : <AppNavigator />;
    if (loginChecked) return !isLoggedIn ? <AppNavigator /> : <AppNavigator />;
    return <Loader />;
  };

  return <NavigationContainer>{getNavigator()}</NavigationContainer>;
};

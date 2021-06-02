import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { Loader } from "../components/atoms/Loader";
import { useDispatch } from "react-redux";
import { store } from "../state";
import { Services } from "../services";

export default () => {
  const loginChecked = useRef(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  // watch for changes in login state
  let unsubscribe = store.subscribe(() => {
    setIsLoggedIn(store.getState().auth.loginComplete);
  });

  useEffect(() => {
    if (loginChecked.current) return;

    async function fetchLoginStatus() {
      // check is user token is stored and valid
      if (await Services.AuthService.isRefreshValid()) {
        const [res, errors] = await Services.AuthService.refreshAccessToken();

        // if refresh was sucessful go to feed
        if (res) setIsLoggedIn(true);

        // TODO: get user info from storage
      }
      loginChecked.current = true;
    }
    fetchLoginStatus();

    // logout();
  }, []);

  const getNavigator = (): any | null => {
    if (loginChecked.current)
      return !isLoggedIn ? <AuthNavigator /> : <AppNavigator />;
    return <Loader />;
  };

  return <NavigationContainer>{getNavigator()}</NavigationContainer>;
};

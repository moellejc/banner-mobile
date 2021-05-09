import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { checkLoginStatus, getToken, logout } from "../services/auth";
import { Loader } from "../components/atoms/Loader";
import { useDispatch } from "react-redux";
import { Actions } from "../state";
import { store } from "../state";

export default () => {
  const [loginChecked, setLoginChecked] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const dispatch = useDispatch();

  // watch for changes in login state
  let unsubscribe = store.subscribe(() => {
    setIsLoggedIn(store.getState().auth.loginComplete);
  });

  useEffect(() => {
    console.log("calling useEffect in index nav");
    async function fetchLoginStatus() {
      // check is user token is stored and valid
      if (await checkLoginStatus()) {
        // update store
        let token = await getToken();
        dispatch({
          type: Actions.AuthActions.SET_TOKEN,
          payload: { token },
        });

        // TODO: get user info from storage
      }
      setLoginChecked(true);
    }
    fetchLoginStatus();

    // logout();
  }, []);

  const getNavigator = (): any | null => {
    if (loginChecked) return !isLoggedIn ? <AuthNavigator /> : <AppNavigator />;
    return <Loader />;
  };

  return <NavigationContainer>{getNavigator()}</NavigationContainer>;
};

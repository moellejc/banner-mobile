import React from "react";
import { StatusBar } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { Router } from "./navigations";
import { NativeBaseProvider } from "native-base";
import { client } from "./lib/apollo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppTheme from "./constants/styles/Theme";
import { Provider } from "react-redux";
import { store } from "./state";
import AppLoading from "expo-app-loading";
import { appStartupLoader } from "./loaders/appstartup.loader";

export default class App extends React.PureComponent {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={appStartupLoader}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    /**
     * Application Hierarchy
     * ---------------------
     * App
     * * Nav Router (Auth | Banner - Menu & Search)
     * * * Feed
     * * * * Current Place
     * * * Profile
     * * * Search
     * * * Discover
     * * * Add
     */

    return (
      <ApolloProvider client={client}>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <Provider store={store}>
              <StatusBar hidden={true} />
              <Router />
            </Provider>
          </SafeAreaProvider>
        </NativeBaseProvider>
      </ApolloProvider>
    );
  }
}

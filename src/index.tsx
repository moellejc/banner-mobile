import React from "react";
import { ApolloProvider } from "@apollo/client";
import AppNav from "./navigations";
import { Provider as PaperProvider } from "react-native-paper";
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
     * * Navigation (Auth | Banner - Menu & Search)
     * * * Feed
     * * * * Current Place
     * * * Profile
     * * * Search
     * * * Discover
     * * * Add
     */

    return (
      <ApolloProvider client={client}>
        <PaperProvider theme={AppTheme}>
          <SafeAreaProvider>
            <Provider store={store}>
              <AppNav />
            </Provider>
          </SafeAreaProvider>
        </PaperProvider>
      </ApolloProvider>
    );
  }
}

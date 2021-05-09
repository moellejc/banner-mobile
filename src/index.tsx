import React from "react";
import { ApolloProvider } from "@apollo/client";
import AppNav from "./navigations";
import { Provider as PaperProvider } from "react-native-paper";
import { client } from "./lib/apollo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppTheme from "./constants/styles/Theme";
import { Provider } from "react-redux";
import { store } from "./state";

export default class App extends React.PureComponent {
  render() {
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

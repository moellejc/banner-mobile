import React from "react";
import { ApolloProvider } from "@apollo/client";
import AppNav from "./navigations";
import { Provider as PaperProvider } from "react-native-paper";
import { client } from "./lib/apollo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppTheme from "./styles/Theme";

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <PaperProvider theme={AppTheme}>
          <SafeAreaProvider>
            <AppNav />
          </SafeAreaProvider>
        </PaperProvider>
      </ApolloProvider>
    );
  }
}

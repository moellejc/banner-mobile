import React from "react";
import { ApolloProvider } from "@apollo/client";
import AppNav from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { client } from "./lib/apollo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import AppTheme from "./theme/Theme";

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <PaperProvider theme={AppTheme}>
          <SafeAreaProvider>
            <NavigationContainer>
              <AppNav />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </ApolloProvider>
    );
  }
}

import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Platform } from "react-native";
import Routes from "./routes";

const host =
  Platform.OS === "ios" ? "http://localhost:8000" : "http://10.0.0.2:8000";

const client = new ApolloClient({
  uri: `${host}/graphql`,
  cache: new InMemoryCache(),
});

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

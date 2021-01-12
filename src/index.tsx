import React from "react";
import { ApolloProvider } from "@apollo/client";
import Routes from "./routes";
import { Provider as PaperProvider } from "react-native-paper";
import { client } from "./lib/apollo";

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </ApolloProvider>
    );
  }
}

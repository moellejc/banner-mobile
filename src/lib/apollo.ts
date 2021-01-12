import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http/HttpLink";
import { Platform } from "react-native";

const host =
  Platform.OS === "ios" ? "http://localhost:4000" : "http://10.0.2.2:4000";

// TODO: update to get token
const token = "testing_token";

const link = new HttpLink({
  uri: `${host}/graphql`,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

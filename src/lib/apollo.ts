import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http/HttpLink";
import { API_URL } from "@env";

const host = API_URL;

console.log("This is the API URL");
console.log(`${host}/graphql`);

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

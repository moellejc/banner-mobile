import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { HttpLink } from "@apollo/client/link/http/HttpLink";
import { API_URL } from "@env";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { Services } from "../services/index";

const host = API_URL;
const httpLink = new HttpLink({
  uri: `${host}/graphql`,
});

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: "accessToken",
  isTokenValidOrUndefined: () => !Services.AuthService.isAccessValid(), // TODO: check for requests not requiring access token
  fetchAccessToken: () => {
    return fetch(`${host}/api/refresh_token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Services.AuthService.getAccessToken()}`,
        "refresh-token": Services.AuthService.getRefreshToken(),
      },
    });
  },
  handleFetch: (accessToken) => {
    Services.AuthService.updateAccessToken(accessToken);
  },
  handleError: (err) => {
    // full control over handling token fetch Error
    console.warn("Your refresh token is invalid. Try to relogin");
    console.error(err);

    // your custom action here
    Services.AuthService.logout();
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Services.AuthService.getAccessToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  // link: tokenRefreshLink.concat(authLink.concat(link)),
  link: ApolloLink.from([tokenRefreshLink as any, authLink, httpLink]),
  cache: new InMemoryCache(),
});

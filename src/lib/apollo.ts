import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { HttpLink } from "@apollo/client/link/http/HttpLink";
// @ts-ignore
import { API_URI, GRAPHQL_URI, HOST_URL } from "@env";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import * as TokenService from "../services/token.service";

const httpLink = new HttpLink({
  uri: `${HOST_URL}${GRAPHQL_URI}`,
});

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: "accessToken",
  isTokenValidOrUndefined: () =>
    TokenService.getAccessToken() != "" && !TokenService.isAccessValid(), // TODO: check for requests not requiring access token
  fetchAccessToken: () => {
    console.log("refresh access token from apollo middleware");
    return fetch(`${HOST_URL}${API_URI}/refresh_token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.getAccessToken()}`,
        "refresh-token": TokenService.getRefreshToken(),
      },
    });
  },
  handleFetch: (accessToken) => {
    TokenService.updateAccessToken(accessToken);
  },
  handleError: (err) => {
    // full control over handling token fetch Error
    console.warn("Your refresh token is invalid. Try to relogin");
    console.error(err);

    // your custom action here
    // convert logout to be REST API
    fetch(`${HOST_URL}${API_URI}/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.getAccessToken()}`,
        "refresh-token": TokenService.getRefreshToken(),
      },
    });
    // Services.AuthService.logout();
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = TokenService.getAccessToken();
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

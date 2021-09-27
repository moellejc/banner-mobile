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
  isTokenValidOrUndefined: () => {
    console.log(`Access Token: ${TokenService.getAccessToken()}`);
    console.log(`Refresh Token: ${TokenService.getRefreshToken()}`);

    // check for guest if both tokens are empty
    console.log("check token guest");
    if (!TokenService.getAccessToken() && !TokenService.getRefreshToken()){
      console.log("user is a guest");
      return true;
    }
      

    console.log("check access token bad refresh good");
    // check for inital user if refresh token is valid but access is not
    if (!TokenService.isAccessValid() && TokenService.isRefreshValid())
      return false;

    console.log("check access token good refresh bad");
    // user's refresh has expired and logout will need to be called
    if (TokenService.isAccessValid() && !TokenService.isRefreshValid())
      return false;

    console.log("default token check response");
    // default response to do nothing
    return true;
  }, // TODO: check for requests not requiring access token
  fetchAccessToken: () => {
    console.log(`refresh access token from apollo middleware}`);
    return fetch(`${HOST_URL}${API_URI}/refresh_token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TokenService.getAccessToken()}`,
        "refresh-token": TokenService.getRefreshToken(),
      },
    });
  },
  handleFetch: (accessToken) => {
    console.log("handle token refresh fetch");
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

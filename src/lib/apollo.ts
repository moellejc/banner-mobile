import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { HttpLink } from "@apollo/client/link/http/HttpLink";
import { API_URL } from "@env";
import { fromPromise } from "apollo-link";
import { Services } from "../services/index";
import { store } from "../state/store";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      if (extensions && "UNAUTHENTICATED" in extensions) {
        return fromPromise(Services.AuthService.refreshAccessToken());
      }
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// const errorLink2 = onError(
//   ({ graphQLErrors, networkError, operation, forward }) => {
//     if (graphQLErrors) {
//       for (let err of graphQLErrors) {
//         switch (err.extensions.code) {
//           case 'UNAUTHENTICATED':
//             // error code is set to UNAUTHENTICATED
//             // when AuthenticationError thrown in resolver

//             return fromPromise(
//               getNewToken()
//                 .then(({ accessToken, refreshToken }) => {
//                   // Store the new tokens for your auth link
//                   return accessToken;
//                 })
//                 .catch(error => {
//                   // Handle token refresh errors e.g clear stored tokens, redirect to login, ...
//                   return;
//                 })
//             ).filter(value => Boolean(value))
//              .flatMap(() => {
//               // retry the request, returning the new observable
//               return forward(operation);
//             });
//         }
//       }
//     }
//     if (networkError) {
//       console.log(`[Network error]: ${networkError}`);
//       // if you would also like to retry automatically on
//       // network errors, we recommend that you use
//       // apollo-link-retry
//     }
//   }
// );

const host = API_URL;
const link = new HttpLink({
  uri: `${host}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = store.getState().auth.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(link)),
  cache: new InMemoryCache(),
});

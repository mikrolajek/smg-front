import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { useMemo } from "react";
import iws from "isomorphic-ws";




// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hcmNpbiB0byBqYSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDA3NTc1NTUsImV4cCI6MTYwMjQxMTAxMCwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbIm1hbmFnZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJtYW5hZ2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjEyMzQ1Njc4OTAiLCJ4LWhhc3VyYS1vcmctaWQiOiIxMjMiLCJ4LWhhc3VyYS1jdXN0b20iOiJjdXN0b20tdmFsdWUifX0.KfCFqSIAMha3uA1TIHfTRczvJu3dQExgEWVsZ8UUtss";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = (token: string | null) => new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_HASURA_ENDPOINT}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const wsLink = (token: string | null) => new WebSocketLink({
  uri: `${process.env.NEXT_PUBLIC_HASURA_ENDPOINT_WS}`,
  options: {
    connectionParams: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    reconnect: true,
  },
  webSocketImpl: iws,
});

const splitLink = (token: string | null) => split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink(token),
  httpLink(token)
);

const createApolloClient = (token: string | null) => {
  return new ApolloClient({
    link: splitLink(token),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

export function initializeApollo(initialState: any | null = null, token: string | null) {
  const _apolloClient = apolloClient ?? createApolloClient(token);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any, token: string | null ) {
  const store = useMemo(() => initializeApollo(initialState, token), [initialState]);
  return store;
}

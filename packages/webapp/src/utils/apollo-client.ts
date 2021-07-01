import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  // uri: process.env.APOLLO_URI,
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

export default apolloClient;

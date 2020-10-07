import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({ uri: 'http://127.0.0.1:8080/graphql/' })
const cache = new InMemoryCache()
const client = new ApolloClient({
  link,
  cache
})

export default client
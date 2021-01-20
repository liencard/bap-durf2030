import { ApolloClient, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
  },
  cache: new InMemoryCache(),
});

// ZONDER APOLLO ENKEL FAUNA

// import faunadb from 'faunadb';
// const client = new faunadb.Client({
//   secret: process.env.FAUNA_SECRET_KEY,
// });
// const q = faunadb.query;
// export { client, q };

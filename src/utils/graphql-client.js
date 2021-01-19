// import { GraphQLClient } from 'graphql-request';

// const endpoint = 'https://graphql.fauna.com/graphql';

// export const graphQLClient = new GraphQLClient(endpoint, {
//   headers: {
//     authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_SECRET}`,
//     'X-Schema-Preview': 'partial-update-mutation',
//   },
// });

// https://css-tricks.com/a-complete-walkthrough-of-graphql-apis-with-react-and-faunadb/
// https://github.com/MrAlexLau/fauna-todo
import { ApolloClient, InMemoryCache } from '@apollo/client';
// process.env.FAUNA_SECRET_KEY
const test = `fnAD_6pJ7LACB4IB_n8x7xEO0tG1iLz6v57KKZfY`;

export const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
  },
  cache: new InMemoryCache(),
});

// https://www.freecodecamp.org/news/how-to-fetch-graphql-data-in-next-js-with-apollo-graphql/
// await werkt niet
// const { data } = client.query({
//   query: gql`
//     {
//       allItems {
//         data {
//           _id
//           name
//         }
//       }
//     }
//   `,
// });

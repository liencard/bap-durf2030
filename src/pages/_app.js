import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../utils/graphql-client';

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;

// Apollo Wrapping
import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';


const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        "X-Shopify-Storefront-Access-Token": "dd4d4dc146542ba7763305d71d1b3d38",
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

const httpLink = createHttpLink({
    uri: 'https://graphql.myshopify.com/api/graphql',
});

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page first="6" first="20" />
        </ApolloProvider>
      );
    }
  }
);
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import withApollo from './apollo_wrapper';
// import { getDataFromTree } from '@apollo/react-ssr';

import Main from './main';
import Header from '../shared/components/header';
import Footer from '../shared/components/footer';
import ErrorFetchData from '../shared/components/error';
import LoadingData from '../shared/components/loading';

//query productListQuery($first: Int, $first: Int) {
const QUERY = gql`
  query productListQuery {
    shop {
      products(first:6) {
        edges {
          node {
            id
            title
            options {
              id
              name
              values
            }
            variants(first: 20) {
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Index = () => {
  const { loading, error, data } = useQuery(QUERY);

  // Loding Section
  if(loading) return (
    <>
      <Header /> 
      <LoadingData />;
      <Footer />
    </>
  )
  // Error Section
  if(error) return (  
    <>
      <Header /> 
      <ErrorFetchData />; 
      <Footer />
    </>
  )
  // Success Section
  return (
    <>
      <Header />
      <Main {...data}/> 
      <Footer />
    </>
  )
};

export default withApollo(Index);

// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });
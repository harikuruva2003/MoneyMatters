import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const Company = gql`
  query ExampleQuery {
    company {
      ceo
      coo
      employees
      valuation
    }
  }
`;

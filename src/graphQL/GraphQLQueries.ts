import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const CompanyDetails = gql`
  query ExampleQuery {
    company {
      ceo
      coo
      employees
      valuation
    }
  }
`;

export const UpdateCompanyDetails = gql`
  mutation ExampleMutation {
    company {
      ceo
      coo
      employees
      valuation
    }
  }
`;

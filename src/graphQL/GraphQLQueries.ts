import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const CompanyDetails = gql`
  query ExampleQuery(
    $distinctOn: [users_select_column!]
    $orderBy: [users_order_by!]
  ) {
    users(distinct_on: $distinctOn, order_by: $orderBy) {
      id
      name
      rocket
      timestamp
      twitter
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

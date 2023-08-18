import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

export const Company = gql`
  query ($name: String!) {
    __type(name: $name) {
      name
    }
    company {
      ceo
      coo
      cto
      headquarters {
        city
        state
        address
      }
    }
  }
`;

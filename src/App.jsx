import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import React, { createContext } from "react";
import MoneyMattersApp from "./components/MoneyMattersApp/MoneyMattersApp";
import TransactionsStore from "./stores/TransactionsStore";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

export const TransactionsStoreContext = createContext(null);
function App() {
  const transactionStoreInstance = new TransactionsStore();
  return (
    <ApolloProvider client={client}>
      <TransactionsStoreContext.Provider value={transactionStoreInstance}>
        <MoneyMattersApp />
      </TransactionsStoreContext.Provider>
    </ApolloProvider>
  );
}

export default App;

import "./App.css";

import React, { createContext } from "react";
import MoneyMattersApp from "./components/MoneyMattersApp/MoneyMattersApp";
import TransactionsStore from "./stores/TransactionsStore";
import { Company } from "./graphQL/GraphQLQueries";
import { loadErrorMessages, loadDevMessages, useQuery } from "@apollo/client";

export const TransactionsStoreContext = createContext(null);
function App() {
  const { loading, error, data } = useQuery(Company);

  const transactionStoreInstance = new TransactionsStore();
  return (
    <TransactionsStoreContext.Provider value={transactionStoreInstance}>
      <MoneyMattersApp />
    </TransactionsStoreContext.Provider>
  );
}

export default App;

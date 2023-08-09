import "./App.css";

import React, { createContext } from "react";
import MoneyMattersApp from "./components/MoneyMattersApp/MoneyMattersApp";
import TransactionsStore from "./stores/TransactionsStore";
import { DeleteTransaction } from "./components/DeleteTransaction/DeleteTransaction";

export const TransactionsStoreContext = createContext(null);
function App() {
  let transactionStoreInstance = new TransactionsStore();

  return (
    <TransactionsStoreContext.Provider value={transactionStoreInstance}>
      <MoneyMattersApp />
      <DeleteTransaction />
    </TransactionsStoreContext.Provider>
  );
}

export default App;

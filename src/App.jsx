import "./App.css";

import React, { createContext } from "react";
import MoneyMattersApp from "./components/MoneyMattersApp/MoneyMattersApp";
import TransactionsStore from "./stores/TransactionsStore";

export const TransactionsStoreContext = createContext(null);
function App() {
  let transactionStoreInstance = new TransactionsStore();

  return (
    <TransactionsStoreContext.Provider value={transactionStoreInstance}>
      <MoneyMattersApp />
    </TransactionsStoreContext.Provider>
  );
}

export default App;

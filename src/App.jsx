import "./App.css";

import React, { createContext, useState } from "react";
import { MoneyMattersApp } from "./components/MoneyMattersApp/MoneyMattersApp";
import { AddTransaction } from "./components/AddTransactionLayout/AddTransactionLayout";

export let AllTransactionsError = createContext(null);
export const AddTransactionModal = createContext(null);

function App() {
  let [isAllTransactionsError, setIsAllTransactionsError] = useState(false);
  let [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AddTransactionModal.Provider value={{ isModalOpen, setIsModalOpen }}>
      <AllTransactionsError.Provider
        value={{ setIsAllTransactionsError, isAllTransactionsError }}
      >
        <MoneyMattersApp />
        <AddTransaction />
      </AllTransactionsError.Provider>
    </AddTransactionModal.Provider>
  );
}

export default App;

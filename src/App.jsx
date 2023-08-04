import "./App.css";

import React, { createContext, useState } from "react";
import { MoneyMattersApp } from "./components/MoneyMattersApp/MoneyMattersApp";

export let allTransactionsError = createContext(null);
export let setAllTransactionsError = createContext(null);

function App() {
  let [isAllTransactionsError, setIsAllTransactionsError] = useState(false);

  return (
    <>
      <setAllTransactionsError.Provider value={setIsAllTransactionsError}>
        <allTransactionsError.Provider value={isAllTransactionsError}>
          <MoneyMattersApp />
        </allTransactionsError.Provider>
      </setAllTransactionsError.Provider>
    </>
  );
}

export default App;

import "./App.css";

import React, { createContext, useState } from "react";
import { MoneyMattersApp } from "./components/MoneyMattersApp/MoneyMattersApp";

export let AllTransactionsError = createContext(null);

function App() {
  let [isAllTransactionsError, setIsAllTransactionsError] = useState(false);

  return (
    <>
      <AllTransactionsError.Provider
        value={{ setIsAllTransactionsError, isAllTransactionsError }}
      >
        <MoneyMattersApp />
      </AllTransactionsError.Provider>
    </>
  );
}

export default App;

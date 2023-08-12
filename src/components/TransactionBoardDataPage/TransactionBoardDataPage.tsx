import React from "react";
import { createContext, useState } from "react";
import TransactionsPageTransactions from "../TransactionsPageTransactions/TransactionsPageTransactions";
import { TransactionHeader } from "../TransactionsPageHeader/TransactionsPageHeader";

export const ActivePageIDContext = createContext(null);

export function TransactionBoardDataPage() {
  const [currentActivePageID, setCurrentActivePageID] = useState(
    "AllTransactions"
  );
  return (
    <div>
      <ActivePageIDContext.Provider value={currentActivePageID}>
        <TransactionHeader setCurrentActivePageID={setCurrentActivePageID} />
        <TransactionsPageTransactions />
      </ActivePageIDContext.Provider>
    </div>
  );
}

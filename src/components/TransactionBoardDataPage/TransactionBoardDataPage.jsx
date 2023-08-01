import { createContext, useState } from "react";
import { TransactionsPageTransactions } from "../TransactionsPageTransactions/TransactionsPageTransactions";
import { TransactionHeader } from "../TransactionsPageHeader/TransactionsPageHeader";

export const ActivePageContext = createContext(null);

export function TransactionBoardDataPage() {
  const [currentActivePageID, setCurrentActivePageID] =
    useState("AllTransactions");
  return (
    <div>
      <ActivePageContext.Provider value={currentActivePageID}>
        <TransactionHeader setCurrentActivePageID={setCurrentActivePageID} />
        <TransactionsPageTransactions />
      </ActivePageContext.Provider>
    </div>
  );
}

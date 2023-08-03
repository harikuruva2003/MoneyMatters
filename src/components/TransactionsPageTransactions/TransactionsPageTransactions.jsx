import { useContext } from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import { TransactionsHeaders } from "../TransactionsDataHeaders/TransactionsDataHeaders";
import "./TransactionsPageTransactions.css";
import { ActivePageContext } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import React from "react";

export function TransactionsPageTransactions({
  allTransactionsData,
  debitData,
  creditData,
}) {
  const currentActivePage = useContext(ActivePageContext);

  function getActivePageData() {
    switch (currentActivePage) {
      case "AllTransactions":
        return allTransactionsData ? allTransactionsData.transactions : null;

      case "Debit":
        return allTransactionsData ? debitData : null;

      case "Credit":
        return allTransactionsData ? creditData : null;

      default:
        return [];
    }
  }

  return (
    <div className="transactionsBG">
      <TransactionsHeaders />
      <Data pageData={getActivePageData()} />
    </div>
  );
}

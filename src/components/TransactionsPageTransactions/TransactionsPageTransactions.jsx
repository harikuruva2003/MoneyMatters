import { useContext, useEffect, useState } from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import { TransactionsHeaders } from "../TransactionsDataHeaders/TransactionsDataHeaders";
import "./TransactionsPageTransactions.css";
import { ActivePageContext } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import React from "react";
import { allTransactionsDataAPI } from "../../utils/utils";
import { TransactionsStoreContext } from "../../App";

export function TransactionsPageTransactions() {
  const [creditData, setCreditData] = useState(null);
  const [debitData, setDebitData] = useState(null);
  const [allTransactionsError, setAllTransactionsError] = useState(false);
  const currentActivePage = useContext(ActivePageContext);
  const limit = 20;
  const offSetValue = 0;
  const transactionsStoreContext = useContext(TransactionsStoreContext);

  function getActivePageData() {
    switch (currentActivePage) {
      case "AllTransactions":
        return transactionsStoreContext
          ? transactionsStoreContext.transactionsList
          : null;
      case "Debit":
        return transactionsStoreContext ? debitData : null;

      case "Credit":
        return transactionsStoreContext ? creditData : null;

      default:
        return [];
    }
  }

  useEffect(() => {
    allTransactionsDataAPI({
      setDebitData,
      setCreditData,
      setAllTransactionsError,
      limit,
      offSetValue,
      transactionsStoreContext,
    });
  }, []);

  function setError() {
    setAllTransactionsError(false);
    allTransactionsDataAPI({
      setDebitData,
      setCreditData,
      setAllTransactionsError,
      limit,
      offSetValue,
      transactionsStoreContext,
    });
  }
  return (
    <div className="transactionsBG">
      <TransactionsHeaders />
      {!allTransactionsError ? (
        <Data pageData={getActivePageData()} />
      ) : (
        <div>
          <h1>Something went wrong</h1>
          <button onClick={setError}>Try Again</button>
        </div>
      )}
    </div>
  );
}

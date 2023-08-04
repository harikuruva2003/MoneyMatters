import { useContext, useEffect, useState } from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import { TransactionsHeaders } from "../TransactionsDataHeaders/TransactionsDataHeaders";
import "./TransactionsPageTransactions.css";
import { ActivePageContext } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import React from "react";
import { allTransactionsDataAPI } from "../../utils/utils";

export function TransactionsPageTransactions() {
  const [allTransactionsData, setAllTransactionsData] = useState(null);
  const [creditData, setCreditData] = useState(null);
  const [debitData, setDebitData] = useState(null);
  const [allTransactionsError, setAllTransactionsError] = useState(false);
  const currentActivePage = useContext(ActivePageContext);
  let limit = 20;
  let offSetValue = 0;

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
  useEffect(() => {
    allTransactionsDataAPI({
      setAllTransactionsData,
      setDebitData,
      setCreditData,
      setAllTransactionsError,
      limit,
      offSetValue,
    });
  }, []);

  function setError() {
    setAllTransactionsError(false);
    allTransactionsDataAPI({
      setAllTransactionsData,
      setDebitData,
      setCreditData,
      setAllTransactionsError,
      limit,
      offSetValue,
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

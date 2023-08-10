import { useContext, useEffect, useState } from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import { TransactionsHeaders } from "../TransactionsDataHeaders/TransactionsDataHeaders";
import "./TransactionsPageTransactions.css";
import { ActivePageContext } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import React from "react";
import { allTransactionsDataAPI } from "../../utils/utils";
import { TransactionsStoreContext } from "../../App";
import { observer } from "mobx-react";

function TransactionsPageTransactions() {
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
        return transactionsStoreContext
          ? transactionsStoreContext.debitData
          : null;

      case "Credit":
        return transactionsStoreContext
          ? transactionsStoreContext.creditData
          : null;

      default:
        return [];
    }
  }

  useEffect(() => {
    allTransactionsDataAPI({
      setAllTransactionsError,
      limit,
      offSetValue,
      transactionsStoreContext,
    });
  }, []);

  function setError() {
    setAllTransactionsError(false);
    allTransactionsDataAPI({
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

export default observer(TransactionsPageTransactions);

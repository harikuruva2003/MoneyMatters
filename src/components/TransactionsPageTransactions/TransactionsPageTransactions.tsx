import { useContext, useEffect, useState } from "react";
import Data from "../TransactionPageData/TransactionPageData";
import { TransactionsHeaders } from "../TransactionsDataHeaders/TransactionsDataHeaders";
import "./TransactionsPageTransactions.css";
import { ActivePageIDContext } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import React from "react";
import { allTransactionsDataAPI } from "../../utils/utils";
import { TransactionsStoreContext } from "../../App";
import { observer } from "mobx-react";
import { TransactionDataType } from "../../types/types";
import TransactionsStore from "../../stores/TransactionsStore";

function TransactionsPageTransactions() {
  const [isAllTransactionsError, setIsAllTransactionsError] = useState<boolean>(
    false
  );
  const currentActivePageID: string | null = useContext(ActivePageIDContext);
  const limit: number = 20;
  const offSetValue: number = 0;
  const transactionsStoreContext: TransactionsStore | null = useContext(
    TransactionsStoreContext
  );

  function getActivePageData(): TransactionDataType[] | null {
    switch (currentActivePageID) {
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

  useEffect((): void => {
    allTransactionsDataAPI(
      setIsAllTransactionsError,
      limit,
      offSetValue,
      transactionsStoreContext
    );
  }, []);

  function setError(): void {
    setIsAllTransactionsError(false);
    allTransactionsDataAPI(
      setIsAllTransactionsError,
      limit,
      offSetValue,
      transactionsStoreContext
    );
  }
  return (
    <div className="transactionsBG">
      <TransactionsHeaders />
      {!isAllTransactionsError ? (
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

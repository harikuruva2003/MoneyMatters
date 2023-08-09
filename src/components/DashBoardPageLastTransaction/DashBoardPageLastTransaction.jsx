import React, { useContext, useEffect, useState } from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import "./DashBoardPageLastTransaction.css";
import { lastThreeTransactions } from "../../utils/utils";
import { TransactionsStoreContext } from "../../App";
export function LastTransaction() {
  let [isError, setIsError] = useState(false);
  const [last, setLast] = useState(null);
  const transactionsStoreContext = useContext(TransactionsStoreContext);

  useEffect(() => {
    lastThreeTransactions({
      setLast,
      transactionsStoreContext,
      setIsError,
    });
  }, []);

  function setError() {
    setIsError(false);
    lastThreeTransactions({
      setLast,
      transactionsStoreContext,
      setIsError,
    });
  }

  return (
    <div className="lastTransaction">
      <h1 className="lastTransactionHeading">Last Transaction</h1>
      <div className="lastTransactionData">
        {!isError ? (
          <Data pageData={last} redColor="#FE5C73" greenColor="#16DBAA" />
        ) : (
          <div>
            <h1>Something went wrong</h1>
            <button onClick={setError}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
}

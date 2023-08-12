import React, { useContext, useEffect, useState } from "react";
import Data from "../TransactionPageData/TransactionPageData";
import "./DashBoardPageLastTransaction.css";
import { lastThreeTransactions } from "../../utils/utils";
import { TransactionsStoreContext } from "../../App";
import { observer } from "mobx-react";
import TransactionsStore from "../../stores/TransactionsStore";

function LastTransaction() {
  let [isError, setIsError] = useState(false);
  const transactionsStoreContext: TransactionsStore | null = useContext(
    TransactionsStoreContext
  );

  useEffect(() => {
    lastThreeTransactions(transactionsStoreContext, setIsError);
  }, []);

  function setError() {
    setIsError(false);
    lastThreeTransactions(transactionsStoreContext, setIsError);
  }
  //transactionsStoreContext.lastTransactionsList
  return (
    <div className="lastTransaction">
      <h1 className="lastTransactionHeading">Last Transaction</h1>
      <div className="lastTransactionData">
        {!isError ? (
          <Data
            pageData={transactionsStoreContext?.lastTransactionsList}
            redColor="#FE5C73"
            greenColor="#16DBAA"
          />
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
export default observer(LastTransaction);

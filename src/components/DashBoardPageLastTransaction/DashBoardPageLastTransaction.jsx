import React, { useContext, useEffect, useState } from "react";
import Data from "../TransactionPageData/TransactionPageData";
import "./DashBoardPageLastTransaction.css";
import { lastThreeTransactions } from "../../utils/utils";
import { TransactionsStoreContext } from "../../App";
import { observer } from "mobx-react";
import { useQuery } from "@apollo/client";
import { Company } from "../../graphQL/GraphQLQueries";
import { CompanyDataStoreContext } from "../../App";

function LastTransaction() {
  let [isError, setIsError] = useState(false);
  const transactionsStoreContext = useContext(TransactionsStoreContext);
  const companyDataStoreContext = useContext(CompanyDataStoreContext);

  useEffect(() => {
    lastThreeTransactions({
      transactionsStoreContext,
      setIsError,
    });
  }, []);

  function setError() {
    setIsError(false);
    lastThreeTransactions({
      transactionsStoreContext,
      setIsError,
    });
  }
  //transactionsStoreContext.lastTransactionsList
  return (
    <div className="lastTransaction">
      <h1 className="lastTransactionHeading">Last Transaction</h1>
      <div className="lastTransactionData">
        {!isError ? (
          <Data
            pageData={transactionsStoreContext.lastTransactionsList}
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

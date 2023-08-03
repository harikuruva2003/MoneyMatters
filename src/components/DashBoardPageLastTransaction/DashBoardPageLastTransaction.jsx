import React from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import "./DashBoardPageLastTransaction.css";
export function LastTransaction({ lastTransactions }) {
  return (
    <div className="lastTransaction">
      <h1 className="lastTransactionHeading">Last Transaction</h1>
      <div className="lastTransactionData">
        <Data
          pageData={lastTransactions.lastTransactions}
          redColor="#FE5C73"
          greenColor="#16DBAA"
        />
      </div>
    </div>
  );
}

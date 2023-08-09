import "./TransactionPageData.css";
import { FinalData } from "../Transaction/Transaction";
import React, { createContext, useState } from "react";
import { Oval as Loader } from "react-loader-spinner";
import { DeleteTransaction } from "../DeleteTransaction/DeleteTransaction";

export const DeleteTransactionContext = createContext(null);
export function Data({ pageData, redColor, greenColor }) {
  let [deleteTransaction, setDeleteTransaction] = useState(false);

  let data = [];
  pageData
    ? pageData.forEach((transaction) => {
        data.push(
          <FinalData
            transaction={transaction}
            pageData={pageData}
            redColor={redColor}
            greenColor={greenColor}
          />
        );
      })
    : data.push(<Loader />);

  return (
    <DeleteTransactionContext.Provider
      value={{ deleteTransaction, setDeleteTransaction }}
    >
      {data}
      <DeleteTransaction />
    </DeleteTransactionContext.Provider>
  );
}

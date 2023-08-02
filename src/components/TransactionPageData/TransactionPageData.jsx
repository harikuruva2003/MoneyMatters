import "./TransactionPageData.css";
import { FinalData } from "../Transaction/Transaction";
import React from "react";

export function Data({ pageData, redColor, greenColor }) {
  let data = [];
  pageData.forEach((transaction) => {
    data.push(
      <FinalData
        transaction={transaction}
        pageData={pageData}
        redColor={redColor}
        greenColor={greenColor}
      />
    );
  });

  return data;
}

import "./TransactionPageData.css";
import { FinalData } from "../Transaction/Transaction";
import React from "react";
import { Audio as Loader } from "react-loader-spinner";

export function Data({ pageData, redColor, greenColor }) {
  let data = [];
  console.log(pageData);
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
  return data;
}

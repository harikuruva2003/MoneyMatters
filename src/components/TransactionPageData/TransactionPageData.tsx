import "./TransactionPageData.css";
import { FinalData } from "../Transaction/Transaction";
import React from "react";
import { Oval as Loader } from "react-loader-spinner";
import { observer } from "mobx-react";

function Data(pageData, redColor: string, greenColor: string) {
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

  return data;
}
export default observer(Data);

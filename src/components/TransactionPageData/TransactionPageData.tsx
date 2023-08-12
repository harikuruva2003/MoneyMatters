import "./TransactionPageData.css";
import { FinalData } from "../Transaction/Transaction";
import React from "react";
import { Oval as Loader } from "react-loader-spinner";
import { observer } from "mobx-react";
import { TransactionDataType } from "../../types/types";

function Data(
  pageData: TransactionDataType[],
  redColor: string,
  greenColor: string
) {
  let data = [];
  pageData
    ? pageData.forEach((transaction: TransactionDataType) => {
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

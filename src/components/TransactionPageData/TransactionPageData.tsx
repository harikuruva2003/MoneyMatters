import "./TransactionPageData.css";
import React from "react";
import { Oval } from "react-loader-spinner";
import { observer } from "mobx-react";
import { TransactionDataType } from "../../types/types";
import FinalData from "../Transaction/Transaction";

interface DataProps {
  pageData: TransactionDataType[];
  redColor?: string;
  greenColor?: string;
}

function Data({ pageData, redColor = "#FE5C73", greenColor = "#16DBAA" }: DataProps) {
  if (!pageData || pageData.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Oval height={40} width={40} color="#4fa94d" />
      </div>
    );
  }

  return (
    <>
      {pageData.map((transaction: TransactionDataType) => (
        <FinalData
          key={transaction.id}
          transaction={transaction}
          pageData={pageData}
          redColor={redColor}
          greenColor={greenColor}
        />
      ))}
    </>
  );
}
export default observer(Data);

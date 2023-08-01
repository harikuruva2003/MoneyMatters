import "./TransactionPageData.css";
import { FinalData } from "../Transaction/Transaction";

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

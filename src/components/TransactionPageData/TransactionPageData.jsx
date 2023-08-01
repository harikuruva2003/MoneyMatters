import "./TransactionPageData.css";
import { FinalData } from "../Transaction/Transaction";

export function Data({ pageData }) {
  let data = [];
  pageData.forEach((transaction) => {
    data.push(<FinalData transaction={transaction} pageData={pageData} />);
  });

  return data;
}

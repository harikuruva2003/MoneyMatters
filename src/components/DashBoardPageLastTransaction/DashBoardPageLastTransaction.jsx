import { Data } from "../TransactionPageData/TransactionPageData";
import "./DashBoardPageLastTransaction.css";
export function LastTransaction() {
  let lastTransactionData = [
    {
      name: "Name of the person",
      category: "something",
      Date: "30-08-2004",
      Amount: "$5432.5",
      isProfit: false,
    },
    {
      name: "Name of the person",
      category: "something",
      Date: "20-10-2003",
      Amount: "$5432.5",
      isProfit: true,
    },
    {
      name: "Name of the person",
      category: "something",
      Date: "30-08-2004",
      Amount: "$5432.5",
      isProfit: false,
    },
  ];
  return (
    <div className="lastTransaction">
      <h1 className="lastTransactionHeading">Last Transaction</h1>
      <div className="lastTransactionData">
        <Data pageData={lastTransactionData} />
      </div>
    </div>
  );
}

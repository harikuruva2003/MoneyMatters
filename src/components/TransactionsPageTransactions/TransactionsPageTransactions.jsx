import { useContext } from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import { TransactionsHeaders } from "../TransactionsHeaders/TransactionsHeaders";
import "./TransactionsPageTransactions.css";
import { ActivePageContext } from "../../App";

const transactionData = [
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
  {
    name: "Name of the person",
    category: "something",
    Date: "20-10-2003",
    Amount: "$5432.5",
    isProfit: false,
  },
  {
    name: "Name of the person",
    category: "something",
    Date: "30-08-2004",
    Amount: "$5432.5",
    isProfit: true,
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
    Date: "20-10-2003",
    Amount: "$5432.5",
    isProfit: false,
  },
  {
    name: "Name of the person",
    category: "something",
    Date: "30-08-2004",
    Amount: "$5432.5",
    isProfit: true,
  },
  {
    name: "Name of the person",
    category: "something",
    Date: "20-10-2003",
    Amount: "$5432.5",
    isProfit: false,
  },
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
    isProfit: true,
  },
  {
    name: "Name of the person",
    category: "something",
    Date: "20-10-2003",
    Amount: "$5432.5",
    isProfit: false,
  },
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
    isProfit: true,
  },
  {
    name: "Name of the person",
    category: "something",
    Date: "20-10-2003",
    Amount: "$5432.5",
    isProfit: false,
  },
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
    isProfit: true,
  },
  {
    name: "Name of the person",
    category: "something",
    Date: "20-10-2003",
    Amount: "$5432.5",
    isProfit: false,
  },
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
    isProfit: true,
  },
  {
    name: "Name of the person",
    category: "something",
    Date: "20-10-2003",
    Amount: "$5432.5",
    isProfit: false,
  },
  {
    name: "Name of the person",
    category: "something",
    Date: "30-08-2004",
    Amount: "$5432.5",
    isProfit: false,
  },
];

const creditData = [
  {
    name: "Name of the person",
    category: "something",
    Date: "30-08-2004",
    Amount: "$5432.5",
    isProfit: true,
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
    isProfit: true,
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
    isProfit: true,
  },
];

const debitData = [
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
    isProfit: false,
  },
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
    isProfit: false,
  },
  {
    name: "Name of the person",
    category: "something",
    Date: "30-08-2004",
    Amount: "$5432.5",
    isProfit: false,
  },
];
export function TransactionsPageTransactions() {
  const currentActivePage = useContext(ActivePageContext);

  function getActivePageData() {
    switch (currentActivePage) {
      case "AllTransactions":
        return transactionData;

      case "Debit":
        return debitData;

      case "Credit":
        return creditData;

      default:
        return [];
    }
  }

  return (
    <div className="transactionsBG">
      <TransactionsHeaders />
      <div>
        <Data activepage={getActivePageData()} />
      </div>
    </div>
  );
}

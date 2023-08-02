import { useContext, useEffect } from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import { TransactionsHeaders } from "../TransactionsDataHeaders/TransactionsDataHeaders";
import "./TransactionsPageTransactions.css";
import { ActivePageContext } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import React from "react";

const allTransactionData = [
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

  useEffect(() => {
    fetch("https://bursting-gelding-24.hasura.app/api/rest/all-transactions", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": "1",
      },
      body: JSON.stringify({
        limit: 2,
        offSet: 0,
      }),
    })
      .then((data) => data.json())
      .then((data) => console.log("then " + data))
      .catch((err) => console.log("error " + err));
  }, []);

  function getActivePageData() {
    switch (currentActivePage) {
      case "AllTransactions":
        return allTransactionData;

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
      <Data pageData={getActivePageData()} />
    </div>
  );
}

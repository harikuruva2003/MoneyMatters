import { useContext } from "react";
import { Data } from "../TransactionPageData/TransactionPageData";
import { TransactionsHeaders } from "../TransactionsDataHeaders/TransactionsDataHeaders";
import "./TransactionsPageTransactions.css";
import { ActivePageContext } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import React from "react";

export function TransactionsPageTransactions({
  allTransactionsData,
  debitData,
  creditData,
}) {
  const currentActivePage = useContext(ActivePageContext);

  // const [allTransactionsData, setAllTransactionsData] = useState(null);
  // const [creditData, setCreditData] = useState(null);
  // const [debitData, setDebitData] = useState(null);
  // useEffect(() => {
  //   fetch(
  //     "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=20&offset=0",
  //     {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",
  //         "x-hasura-admin-secret":
  //           "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
  //         "x-hasura-role": "user",
  //         "x-hasura-user-id": "1",
  //       },
  //     }
  //   )
  //     .then((data) => data.json())

  //     .then((data) => {
  //       setAllTransactionsData(data);
  //       let debit_Data = [];
  //       let credit_Data = [];
  //       data.transactions.forEach((transaction) => {
  //         transaction.type === "credit"
  //           ? credit_Data.push(transaction)
  //           : debit_Data.push(transaction);
  //       });
  //       setDebitData(debit_Data);
  //       setCreditData(credit_Data);

  //       // setLastThreeTransactions(
  //       //   data.transactions.slice(
  //       //     data.transactions.length - 3,
  //       //     data.transactions.length
  //       //   )
  //       // );
  //     })

  //     .catch((err) => console.log("error " + err));
  // }, []);

  function getActivePageData() {
    switch (currentActivePage) {
      case "AllTransactions":
        return allTransactionsData ? allTransactionsData.transactions : null;

      case "Debit":
        return allTransactionsData ? debitData : null;

      case "Credit":
        return allTransactionsData ? creditData : null;

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

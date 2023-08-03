import { DataPageHeader } from "../DataPageHeader/DataPageHeader";
import { LastTransaction } from "../DashBoardPageLastTransaction/DashBoardPageLastTransaction";
import { Card } from "../DashBoardTotalAmountCards/DashBoardTotalAmountCards";
import "./DashBoardPage.css";
import { useEffect, useState } from "react";
import React from "react";
import {
  AllTransactionsDataAPI,
  CreditAndDebitDataAPI,
} from "../../utils/utils";

export function DashBoardPage({
  lastTransactions,
  isAllTransactionsError,
  setIsAllTransactionsError,
}) {
  const [fetchedData, SetFetchedData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  const creditAndDebitCardsData = [
    {
      money: !isLoading
        ? `$ ${fetchedData.totals_credit_debit_transactions[1].sum} `
        : "",
      text: "Credit",
      image: "/images/image1.png",
    },
    {
      money: !isLoading
        ? `$ ${fetchedData.totals_credit_debit_transactions[0].sum} `
        : "",
      text: "Debit",
      image: "/images/image2.png",
    },
  ];

  useEffect(() => {
    CreditAndDebitDataAPI({
      SetFetchedData,
      setIsLoading,
      setIsError,
    });
  }, []);

  function returnCard() {
    return (
      <>
        {creditAndDebitCardsData.map((card, index) => {
          return (
            <Card
              amount={card.money}
              text={card.text}
              image={card.image}
              key={card.text + index.toString()}
            />
          );
        })}
      </>
    );
  }
  function setTotalAmountError() {
    setIsError(false);
    CreditAndDebitDataAPI({
      SetFetchedData,
      setIsLoading,
      setIsError,
    });
  }

  function setLastTransactionError() {
    setIsAllTransactionsError(false);
    console.log(isAllTransactionsError);
    AllTransactionsDataAPI({
      setIsAllTransactionsError,
    });
  }

  return (
    <>
      <div className="dashBoardHeader">
        <DataPageHeader
          transactionHeading={"Accounts"}
          addTransactionButton={"+ Add Transaction"}
        />
      </div>
      <div className="cards">
        {!isError ? (
          returnCard()
        ) : (
          <div>
            <h1>Something went wrong</h1>
            <button onClick={setTotalAmountError}>Try Again!</button>
          </div>
        )}
      </div>
      <div>
        {!isAllTransactionsError ? (
          <LastTransaction lastTransactions={lastTransactions} />
        ) : (
          <div>
            <h1>Something went wrong</h1>{" "}
            <button onClick={setLastTransactionError}>Try Again</button>{" "}
          </div>
        )}
      </div>
    </>
  );
}

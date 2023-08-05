import { LastTransaction } from "../DashBoardPageLastTransaction/DashBoardPageLastTransaction";
import { Card } from "../DashBoardTotalAmountCards/DashBoardTotalAmountCards";
import "./DashBoardPage.css";
import { useEffect, useState } from "react";
import React from "react";
import { totalCreditAndDebitDataAPI } from "../../utils/utils";
import { HeaderAndAddTransaction } from "../HeaderAndAddTransaction/HeaderAndAddTransaction";

export function DashBoardPage() {
  const [fetchedData, setFetchedData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [isLastTransactionsError, setIsLastTransactionsError] = useState(false);

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
    totalCreditAndDebitDataAPI({
      setFetchedData,
      setIsLoading,
      setIsLastTransactionsError,
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

  function setTotalAmountAPIError() {
    setIsLastTransactionsError(false);
    totalCreditAndDebitDataAPI({
      setFetchedData,
      setIsLoading,
      setIsLastTransactionsError,
    });
  }

  return (
    <>
      <div className="dashBoardHeader">
        <HeaderAndAddTransaction
          transactionHeading={"Accounts"}
          addTransactionButton={"+ Add Transaction"}
        />
      </div>
      <div className="cards">
        {!isLastTransactionsError ? (
          returnCard()
        ) : (
          <div>
            <h1>Something went wrong</h1>
            <button onClick={setTotalAmountAPIError}>Try Again!</button>
          </div>
        )}
      </div>
      <div>
        <LastTransaction />
      </div>
    </>
  );
}

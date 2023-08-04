import { DataPageHeader } from "../DataPageHeader/DataPageHeader";
import { LastTransaction } from "../DashBoardPageLastTransaction/DashBoardPageLastTransaction";
import { Card } from "../DashBoardTotalAmountCards/DashBoardTotalAmountCards";
import "./DashBoardPage.css";
import { useContext, useEffect, useState } from "react";
import React from "react";
import {
  allTransactionsDataAPI,
  totalCreditAndDebitDataAPI,
} from "../../utils/utils";
import { allTransactionsError, setAllTransactionsError } from "../../App";

export function DashBoardPage({ lastTransactions }) {
  const [fetchedData, setFetchedData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  let [isLastTransactionsError, setIsLastTransactionsError] = useState(false);
  let setTransactionsError = useContext(setAllTransactionsError);
  let transactionsError = useContext(allTransactionsError);

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

  function setAllTransactionsAPIError() {
    setTransactionsError(false);
    allTransactionsDataAPI(setTransactionsError);
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
        {!transactionsError ? (
          <LastTransaction lastTransactions={lastTransactions} />
        ) : (
          <div>
            <h1>Something went wrong</h1>{" "}
            <button onClick={setAllTransactionsAPIError}>Try Again</button>{" "}
          </div>
        )}
      </div>
    </>
  );
}

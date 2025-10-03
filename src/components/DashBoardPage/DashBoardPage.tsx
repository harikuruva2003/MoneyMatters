import LastTransaction from "../DashBoardPageLastTransaction/DashBoardPageLastTransaction";
import Card from "../DashBoardTotalAmountCards/DashBoardTotalAmountCards";
import "./DashBoardPage.css";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { totalCreditAndDebitDataAPI } from "../../utils/utils";
import HeaderAndAddTransaction from "../HeaderAndAddTransaction/HeaderAndAddTransaction";
import { TransactionsStoreContext } from "../../App";
import { observer } from "mobx-react";
import TransactionsStore from "../../stores/TransactionsStore";
import { CreditAndDebitCardsDataType } from "../../types/types";

function DashBoardPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isLastTransactionsError, setIsLastTransactionsError] = useState<
    boolean
  >(false);
  const transactionsStoreContext: TransactionsStore | null = useContext(
    TransactionsStoreContext
  );

  const creditAndDebitCardsData: CreditAndDebitCardsDataType[] = [
    {
      money: !isLoading
        ? `$ ${transactionsStoreContext?.creditTotalAmount}`
        : "",
      text: "Credit",
      image: "/images/image1.png",
    },
    {
      money: !isLoading
        ? `$ ${transactionsStoreContext?.debitTotalAmount}`
        : "",
      text: "Debit",
      image: "/images/image2.png",
    },
  ];

  useEffect(() => {
    totalCreditAndDebitDataAPI(
      transactionsStoreContext,
      setIsLoading,
      setIsLastTransactionsError
    );
  }, []);

  function returnCard() {
    return (
      <>
        {creditAndDebitCardsData.map((card, index) => {
          return (
            <Card
            key={card.text + index.toString()}
              amount={card.money}
              text={card.text}
              image={card.image}
            />
          );
        })}
      </>
    );
  }

  function setTotalAmountAPIError(): void {
    setIsLastTransactionsError(false);
    totalCreditAndDebitDataAPI(
      transactionsStoreContext,
      setIsLoading,
      setIsLastTransactionsError
    );
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

export default observer(DashBoardPage);

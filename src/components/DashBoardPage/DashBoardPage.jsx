import LastTransaction from "../DashBoardPageLastTransaction/DashBoardPageLastTransaction";
import Card from "../DashBoardTotalAmountCards/DashBoardTotalAmountCards";
import "./DashBoardPage.css";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { totalCreditAndDebitDataAPI } from "../../utils/utils";
import { HeaderAndAddTransaction } from "../HeaderAndAddTransaction/HeaderAndAddTransaction";
import { CompanyDataStoreContext, TransactionsStoreContext } from "../../App";
import { observer } from "mobx-react";
function DashBoardPage() {
  let [isLoading, setIsLoading] = useState(true);
  let [isLastTransactionsError, setIsLastTransactionsError] = useState(false);
  const transactionsStoreContext = useContext(TransactionsStoreContext);
  const companyDataStoreContext = useContext(CompanyDataStoreContext);

  const creditAndDebitCardsData = [
    {
      money: !isLoading
        ? `$ ${transactionsStoreContext.creditTotalAmount} `
        : "",
      text: "Credit",
      image: "/images/image1.png",
    },
    {
      money: !isLoading
        ? `$ ${transactionsStoreContext.debitTotalAmount} `
        : "",
      text: "Debit",
      image: "/images/image2.png",
    },
  ];

  useEffect(() => {
    totalCreditAndDebitDataAPI({
      transactionsStoreContext,
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
      transactionsStoreContext,
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
      <div>
        <h1>SPACE X Company Details</h1>
        <p>CEO : {companyDataStoreContext.companyData.company.ceo}</p>
        <p>COO : {companyDataStoreContext.companyData.company.coo}</p>
        <p>
          EMPLOYEES : {companyDataStoreContext.companyData.company.employees}
        </p>
        <p>
          VALUATION : {companyDataStoreContext.companyData.company.valuation}
        </p>
        <button>Update Details</button>
      </div>
    </>
  );
}

export default observer(DashBoardPage);

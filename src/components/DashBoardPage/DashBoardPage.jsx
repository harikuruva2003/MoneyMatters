import { DataPageHeader } from "../DataPageHeader/DataPageHeader";
import { LastTransaction } from "../DashBoardPageLastTransaction/DashBoardPageLastTransaction";
import { Card } from "../DashBoardTotalAmountCards/DashBoardTotalAmountCards";
import "./DashBoardPage.css";
import { useEffect, useState } from "react";
import React from "react";

export function DashBoardPage() {
  const [fetchedData, SetFetchedData] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

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
    fetch(
      "https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "user",
          "x-hasura-user-id": "1",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        SetFetchedData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error" + err);
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
  return (
    <>
      <div className="dashBoardHeader">
        <DataPageHeader
          transactionHeading={"Accounts"}
          addTransactionButton={"+ Add Transaction"}
        />
      </div>
      <div className="cards">{returnCard()}</div>
      <div>
        <LastTransaction />
      </div>
    </>
  );
}

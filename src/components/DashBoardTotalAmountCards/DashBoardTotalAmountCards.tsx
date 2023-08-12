import { observer } from "mobx-react";
import "./DashBoardTotalAmountCards.css";
import React from "react";
import { Oval as Loader } from "react-loader-spinner";

function Card(amount: number, text: string, image: string) {
  return (
    <div className="creditAndDebitCards">
      <div className="creditedMoneyAndCreditText">
        <span className={text === "Credit" ? "creditMoney" : "debitMoney"}>
          {amount ? amount : <Loader />}
        </span>
        <span className="creditAndDebitText">{text}</span>
      </div>
      <img src={image} alt="CreditImage" width={200} />
    </div>
  );
}
export default observer(Card);

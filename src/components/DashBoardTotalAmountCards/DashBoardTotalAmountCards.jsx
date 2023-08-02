import "./DashBoardTotalAmountCards.css";
import React from "react";
import { Audio as Loader } from "react-loader-spinner";

export function Card({ amount, text, image }) {
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

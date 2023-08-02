import "./DashBoardTotalAmountCards.css";
import React from "react";
export function Card({ amount, text, image }) {
  return (
    <div className="creditAndDebitCards">
      <div className="creditedMoneyAndCreditText">
        <span className={text === "Credit" ? "creditMoney" : "debitMoney"}>
          {amount}
        </span>
        <span className="creditAndDebitText">{text}</span>
      </div>
      <img src={image} alt="CreditImage" width={200} />
    </div>
  );
}

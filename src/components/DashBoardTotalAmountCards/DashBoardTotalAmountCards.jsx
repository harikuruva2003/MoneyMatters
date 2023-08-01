import "./DashBoardTotalAmountCards.css";
export function Card({ amount, text, image }) {
  return (
    <div className="creditAndDebitCards">
      <div className="creditedMoneyAndCreditText">
        <span className={text === "Credit" ? "creditMoney" : "debitMoney"}>
          {amount}
        </span>
        <span className="creditAndDebitText">{text}</span>
      </div>
      <img src={image} alt="" width={200} />
    </div>
  );
}

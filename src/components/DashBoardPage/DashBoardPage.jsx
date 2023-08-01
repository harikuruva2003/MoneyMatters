import { DataPageHeader } from "../DataPageHeader/DataPageHeader";
import { LastTransaction } from "../DashBoardPageLastTransaction/DashBoardPageLastTransaction";
import { Card } from "../DashBoardTotalAmountCards/DashBoardTotalAmountCards";
import "./DashBoardPage.css";

export function DashBoardPage() {
  const creditAndDebitCardsData = [
    { money: "$12,750", text: "Credit", image: "/images/image1.png" },
    { money: "$5,600", text: "Debit", image: "/images/image2.png" },
  ];

  function returnCard() {
    console.log(creditAndDebitCardsData);

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
    <div>
      <div className="transactionHeader">
        <DataPageHeader
          TransactionHeading={"Accounts"}
          addTransactionButton={"+ Add Transaction"}
        />
      </div>
      <div className="cards">{returnCard()}</div>
      <div>
        <LastTransaction />
      </div>
    </div>
  );
}

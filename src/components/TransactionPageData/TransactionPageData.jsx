import "./TransactionPageData.css";
import TransactionDownArrow from "../../icons/TransactionDownArrow/TransactionDownArrow";
import TransactionUpArrow from "../../icons/TransactionUpArrow/TransactionUpArrow";
import TransactionPencil from "../../icons/TransactionPencil/TransactionPencil";
import TransactionDelete from "../../icons/TransactionDelete/TransactionDelete";

function FinalData({ transaction }) {
  let arrowAndPrice = {};

  if (transaction.isProfit) {
    arrowAndPrice.arrow = (
      <span>
        <TransactionUpArrow />{" "}
      </span>
    );
    arrowAndPrice.Amount = (
      <span style={{ color: "#16DBAA" }}>{transaction.Amount}</span>
    );
  } else {
    arrowAndPrice.arrow = (
      <span>
        <TransactionDownArrow />{" "}
      </span>
    );
    arrowAndPrice.Amount = (
      <span style={{ color: "#FE5C73" }}>{transaction.Amount}</span>
    );
  }
  return (
    <div>
      <div className="transaction">
        <div className="iconAndTransactionName transactionName">
          <span>{arrowAndPrice.arrow}</span>
          <span className="dataStyles transactionNamePaddingLeft">
            {transaction.name}
          </span>
        </div>

        <span className="_category dataStyles">{transaction.category}</span>
        <span className="_Date dataStyles">{transaction.Date}</span>
        <span className="_amount dataStyles">{arrowAndPrice.Amount}</span>
        <div className="editOption dataStyles">
          <TransactionPencil />
        </div>
        <TransactionDelete className="deleteIcon" />
      </div>
      <hr className="horizantalLine"></hr>
    </div>
  );
}

export function Data({ activepage }) {
  let data = [];
  activepage.forEach((transaction) => {
    data.push(<FinalData transaction={transaction} />);
  });

  return data;
}

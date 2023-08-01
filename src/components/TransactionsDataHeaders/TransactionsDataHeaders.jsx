import "./TransactionsDataHeaders.css";

export function TransactionsHeaders() {
  const transactionFields = ["Transaction Name", "Category", "Date", "Amount"];
  return (
    <div className="transactionsFieldsContainer">
      <span className="spanElements transactionName">
        {transactionFields[0]}
      </span>
      <span className="spanElements category">{transactionFields[1]}</span>
      <span className="spanElements date">{transactionFields[2]}</span>
      <span className="spanElements amount">{transactionFields[3]}</span>
    </div>
  );
}

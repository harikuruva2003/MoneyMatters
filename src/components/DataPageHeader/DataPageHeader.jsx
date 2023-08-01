import "./DataPageHeader.css";
export function DataPageHeader({ TransactionHeading, addTransactionButton }) {
  return (
    <div className="transactionHeadingAndButton">
      <span className="transactionHeading">{TransactionHeading}</span>
      <button className="addTransactionButton">{addTransactionButton}</button>
    </div>
  );
}

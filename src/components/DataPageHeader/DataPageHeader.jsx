import "./DataPageHeader.css";
import React from "react";
export function DataPageHeader({ transactionHeading, addTransactionButton }) {
  return (
    <div className="transactionHeadingAndButton">
      <span className="transactionHeading">{transactionHeading}</span>
      <button className="addTransactionButton">{addTransactionButton}</button>
    </div>
  );
}

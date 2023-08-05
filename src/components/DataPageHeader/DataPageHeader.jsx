import { useContext } from "react";
import { AddTransactionModal } from "../../App";
import "./DataPageHeader.css";
import React from "react";

export function DataPageHeader({ transactionHeading, addTransactionButton }) {
  let modal = useContext(AddTransactionModal);

  function openModal() {
    modal.setIsModalOpen(true);
  }
  return (
    <div className="transactionHeadingAndButton">
      <span className="transactionHeading">{transactionHeading}</span>
      <button className="addTransactionButton" onClick={openModal}>
        {addTransactionButton}
      </button>
    </div>
  );
}

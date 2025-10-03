import "./DataPageHeader.css";
import React from "react";

interface DataPageHeaderProps {
  transactionHeading: string;
  addTransactionButton: string;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export function DataPageHeader({
  transactionHeading,
  addTransactionButton,
  setIsModalOpen,
}: DataPageHeaderProps) {
  function openModal() {
    setIsModalOpen(true);
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

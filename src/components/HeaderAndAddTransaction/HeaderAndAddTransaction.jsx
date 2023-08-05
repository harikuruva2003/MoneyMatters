import { useState } from "react";
import React from "react";
import { AddTransaction } from "../AddTransactionLayout/AddTransactionLayout";
import { DataPageHeader } from "../DataPageHeader/DataPageHeader";

export function HeaderAndAddTransaction({
  transactionHeading,
  addTransactionButton,
}) {
  let [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <DataPageHeader
        setIsModalOpen={setIsModalOpen}
        transactionHeading={transactionHeading}
        addTransactionButton={addTransactionButton}
      />
      <AddTransaction
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

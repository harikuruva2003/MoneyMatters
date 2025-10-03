import { useState } from "react";
import React from "react";
import AddTransaction from "../AddTransactionLayout/AddTransactionLayout";
import { DataPageHeader } from "../DataPageHeader/DataPageHeader";

interface HeaderAndAddTransactionProps {
  transactionHeading: string;
  addTransactionButton: string;
}

function HeaderAndAddTransaction({
  transactionHeading,
  addTransactionButton,
}: HeaderAndAddTransactionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DataPageHeader
      setIsModalOpen={setIsModalOpen}
      transactionHeading={transactionHeading}
      addTransactionButton={addTransactionButton}
    />
  );
}

export default HeaderAndAddTransaction;

import React, { useState } from "react";

import AddTransactionLayout from "../AddTransactionLayout/AddTransactionLayout";
import { DataPageHeader } from "../DataPageHeader/DataPageHeader";

interface HeaderAndAddTransactionProps {
  transactionHeading: string;
  addTransactionButton: string;
}

function HeaderAndAddTransaction({
  transactionHeading,
  addTransactionButton,
}: HeaderAndAddTransactionProps): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DataPageHeader
        setIsModalOpen={setIsModalOpen}
        transactionHeading={transactionHeading}
        addTransactionButton={addTransactionButton}
      />

      <AddTransactionLayout
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

export default HeaderAndAddTransaction;

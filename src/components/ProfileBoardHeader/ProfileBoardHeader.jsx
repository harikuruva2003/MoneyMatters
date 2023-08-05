import "./ProfileBoardHeader.css";
import { DataPageHeader } from "../DataPageHeader/DataPageHeader";
import React from "react";
import { HeaderAndAddTransaction } from "../HeaderAndAddTransaction/HeaderAndAddTransaction";

export function ProfilePageHeader() {
  return (
    <div className="profileHeader">
      <HeaderAndAddTransaction
        transactionHeading={"Profile"}
        addTransactionButton={"+Add Transaction"}
      />
    </div>
  );
}

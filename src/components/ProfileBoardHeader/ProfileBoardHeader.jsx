import "./ProfileBoardHeader.css";
import { DataPageHeader } from "../DataPageHeader/DataPageHeader";
import React from "react";

export function ProfilePageHeader() {
  return (
    <div className="profileHeader">
      <DataPageHeader
        transactionHeading={"Profile"}
        addTransactionButton={"+Add Transaction"}
      />
    </div>
  );
}

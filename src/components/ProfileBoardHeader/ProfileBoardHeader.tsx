import React from "react";
import HeaderAndAddTransaction from "../HeaderAndAddTransaction/HeaderAndAddTransaction";

export function ProfilePageHeader() {
  return (
    <HeaderAndAddTransaction
      transactionHeading={"Profile"}
      addTransactionButton={"+ Add Transaction"}
    />
  );
}

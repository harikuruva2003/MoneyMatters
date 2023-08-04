import { useContext } from "react";
import "./TransactionsPageHeader.css";
import { ActivePageContext } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import { DataPageHeader } from "../DataPageHeader/DataPageHeader";
import React from "react";
import { TransactionPage } from "../TransactionBoardPage/TransactionsBoardpage";

const TractionsHeaderArray = ["Transactions", "+ Add Transaction"];

const transactionPages = [
  { transactionPageName: "All Transactions", id: "AllTransactions" },
  { transactionPageName: "Debit", id: "Debit" },
  { transactionPageName: "Credit", id: "Credit" },
];

export function TransactionHeader({ setCurrentActivePageID }) {
  let onChangePage = (pageID) => {
    setCurrentActivePageID(pageID);
  };
  const currentActivePage = useContext(ActivePageContext);

  let formattedTransactionPages = transactionPages.map((transactionPage) => {
    return (
      <TransactionPage
        transactionPage={transactionPage}
        currentActivePageID={currentActivePage}
        transactionPageID={transactionPage.id}
        onChangePage={onChangePage}
      />
    );
  });

  return (
    <div className="transactionHeader">
      <DataPageHeader
        transactionHeading={TractionsHeaderArray[0]}
        addTransactionButton={TractionsHeaderArray[1]}
      />
      <div className="transactionPagesContainer">
        {formattedTransactionPages}
      </div>
    </div>
  );
}

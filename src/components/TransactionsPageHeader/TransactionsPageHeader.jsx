import { useContext } from "react";
import "./TransactionsPageHeader.css";
import { ActivePageContext } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import { DataPageHeader } from "../DataPageHeader/DataPageHeader";

const TractionsHeaderArray = ["Transactions", "+ Add Transaction"];

const transactionPages = [
  { transactionPageName: "All Transactions", id: "AllTransactions" },
  { transactionPageName: "Debit", id: "Debit" },
  { transactionPageName: "Credit", id: "Credit" },
];

export function TransactionHeader({ setCurrentActivePageID }) {
  function TransactionPage({
    transactionPage,
    currentActivePageID,
    transactionPageID,
    onChangePage,
  }) {
    return (
      <>
        {currentActivePageID === transactionPageID ? (
          <button className="transactionPagesButton transactionPageAndHighlighter">
            <div>
              <span
                className="transactionPageText"
                style={{ color: "#2D60FF" }}
              >
                {transactionPage.transactionPageName}
              </span>
            </div>
            <div className="transactionPageHighLighter"></div>
          </button>
        ) : (
          <button
            className="transactionPagesButton transactionPageAndHighlighter"
            onClick={() => {
              onChangePage(transactionPageID);
            }}
          >
            <div>
              <span className="transactionPageText">
                {transactionPage.transactionPageName}
              </span>
            </div>
            <div className=""></div>
          </button>
        )}
      </>
    );
  }
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

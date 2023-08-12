import "./TransactionsBoardPage.css";
import React from "react";
export function TransactionPage(
  transactionPage,
  currentActivePageID: string,
  transactionPageID: string,
  onChangePage
) {
  return (
    <>
      {currentActivePageID === transactionPageID ? (
        <button className="transactionPagesButton transactionPageAndHighlighter">
          <div>
            <span className="transactionPageText" style={{ color: "#2D60FF" }}>
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

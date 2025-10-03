import "./TransactionsBoardPage.css";
import React from "react";
import { TransactionPagesType } from "../../types/types";

interface TransactionPageProps {
  transactionPage: TransactionPagesType;
  currentActivePageID: string | null;
  transactionPageID: string;
  onChangePage: (pageID: string) => void;
}

export function TransactionPage({
  transactionPage,
  currentActivePageID,
  transactionPageID,
  onChangePage
}: TransactionPageProps) {
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

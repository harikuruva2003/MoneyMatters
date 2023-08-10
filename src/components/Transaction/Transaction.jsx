import "./Transaction.css";
import React, { useState } from "react";
import TransactionDownArrow from "../../icons/TransactionDownArrow/TransactionDownArrow";
import TransactionUpArrow from "../../icons/TransactionUpArrow/TransactionUpArrow";
import TransactionPencil from "../../icons/TransactionPencil/TransactionPencil";
import TransactionDeleteIcon from "../../icons/TransactionDelete/TransactionDelete";
import { DeleteTransaction } from "../DeleteTransaction/DeleteTransaction";
import UpdateTransaction from "../UpdateTransaction/UpdateTransaction";

export function FinalData({ transaction, pageData, redColor, greenColor }) {
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] =
    useState(false);
  const [isUpdateTransactionModalOpen, setIsUpdateTransactionModalOpen] =
    useState(false);
  const [deletingTransactionID, setDeletingTransactionID] = useState(null);
  const [updatingTransactionID, setUpdatingTransactionID] = useState(null);
  let indexOfTransaction;
  indexOfTransaction = pageData.indexOf(transaction);
  let arrowAndPrice = {};
  if (transaction.type === "credit") {
    arrowAndPrice.arrow = (
      <span>
        <TransactionUpArrow color={greenColor} />
      </span>
    );
    arrowAndPrice.amount = (
      <span style={{ color: "#16DBAA" }}>{"+" + transaction.amount}</span>
    );
  } else {
    arrowAndPrice.arrow = (
      <span>
        <TransactionDownArrow color={redColor} />
      </span>
    );
    arrowAndPrice.amount = (
      <span style={{ color: "#FE5C73" }}>{"-" + transaction.amount}</span>
    );
  }

  function setDeleteTransactionContext() {
    setDeletingTransactionID(transaction.id);
    setIsDeleteTransactionModalOpen(true);
  }

  function openUpdateTransactionModal() {
    setIsUpdateTransactionModalOpen(true);
    setDeletingTransactionID(transaction.id);
    setUpdatingTransactionID(transaction.id);
  }

  return (
    <div>
      <div className="transaction">
        <div className="iconAndTransactionName transactionName">
          <span>{arrowAndPrice.arrow}</span>
          <span className="dataStyles transactionNamePaddingLeft">
            {transaction.transaction_name}
          </span>
        </div>

        <span className="category dataStyles">{transaction.category}</span>
        <span className="date dataStyles">
          {transaction.date.substring(0, 10)}
        </span>
        <span className="amount dataStyles">{arrowAndPrice.amount}</span>
        <button
          className="editOption dataStyles"
          onClick={openUpdateTransactionModal}
        >
          <TransactionPencil />
        </button>
        <button className="trashBin" onClick={setDeleteTransactionContext}>
          {<TransactionDeleteIcon className="deleteIcon" />}{" "}
        </button>
      </div>
      {indexOfTransaction !== pageData.length - 1 ? (
        <hr className="horizontalLine"></hr>
      ) : (
        ""
      )}
      <DeleteTransaction
        isDeleteTransactionModalOpen={isDeleteTransactionModalOpen}
        setIsDeleteTransactionModalOpen={setIsDeleteTransactionModalOpen}
        deletingTransactionID={deletingTransactionID}
      />
      <UpdateTransaction
        setIsUpdateTransactionModalOpen={setIsUpdateTransactionModalOpen}
        isUpdateTransactionModalOpen={isUpdateTransactionModalOpen}
        updatingTransactionID={updatingTransactionID}
      />
    </div>
  );
}

import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./DeleteTransaction.css";
import { DeleteTransactionContext } from "../TransactionsPageTransactions/TransactionsPageTransactions";

const customStyles = {
  content: {
    width: "30%",
    height: "20%",
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
};
export const DeleteTransaction = () => {
  const deleteTransaction = useContext(DeleteTransactionContext);

  function closeDeleteTransactionLayout() {
    deleteTransaction.setIsTransactionDeleted(false);
  }

  return (
    <Modal isOpen={deleteTransaction.isTransactionDeleted} style={customStyles}>
      <div className="deleteTransactionMainDiv">
        <div className="imageAndContentDiv">
          <img
            className="errorImage"
            src="images/Group 848.png"
            alt="error image"
          />
          <div>
            <div>
              <h1 className="topHeading">Are you sure you want to delete</h1>
              <p className="para">
                This transaction will be deleted immediately. You can’t undo
                this action.
              </p>
            </div>
            <div className="buttons">
              <button className="yesDeleteButton">Yes, Delete</button>
              <button className="noLeaveButton">No, Leave it</button>
            </div>
          </div>
        </div>
        <button className="closeButton" onClick={closeDeleteTransactionLayout}>
          X
        </button>
      </div>
    </Modal>
  );
};

import React, { useContext } from "react";
import Modal from "react-modal";
import "./DeleteTransaction.css";
import { deleteTransactionAPI } from "../../utils/utils";
import { TransactionsStoreContext } from "../../App";

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
export const DeleteTransaction = ({
  isDeleteTransactionModalOpen,
  setIsDeleteTransactionModalOpen,
  transactionID,
}) => {
  const transactionsStoreContext = useContext(TransactionsStoreContext);
  function closeDeleteTransactionLayout() {
    setIsDeleteTransactionModalOpen(false);
  }
  function yesDeleteTransactionHandler() {
    deleteTransactionAPI(
      transactionID,
      transactionsStoreContext,
      setIsDeleteTransactionModalOpen
    );
  }
  return (
    <Modal isOpen={isDeleteTransactionModalOpen} style={customStyles}>
      <div className="deleteTransactionMainDiv">
        <div className="imageAndContentDiv">
          <img alt="error" className="errorImage" src="images/Group848.png" />
          <div>
            <div>
              <h1 className="topHeading">Are you sure you want to delete</h1>
              <p className="para">
                This transaction will be deleted immediately. You can’t undo
                this action.
              </p>
            </div>
            <div className="buttons">
              <button
                className="yesDeleteButton"
                onClick={yesDeleteTransactionHandler}
              >
                Yes, Delete
              </button>
              <button
                className="noLeaveButton"
                onClick={closeDeleteTransactionLayout}
              >
                No, Leave it
              </button>
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

import Modal from "react-modal";
import React, { useContext, useState } from "react";
import { updateTransactionAPI } from "../../utils/utils";
import { TransactionsStoreContext } from "../../App";
import { TransactionDataType } from "../../types/types";
import TransactionsStore from "../../stores/TransactionsStore";

// Type assertion to fix React 18 compatibility issue with react-modal
const ReactModal = Modal as any;

const customStyles = {
  content: {
    width: "20%",
    minHeight: "55%",
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

interface UpdateTransactionProps {
  setIsUpdateTransactionModalOpen: (isUpdateTransactionModalOpen: boolean) => void;
  isUpdateTransactionModalOpen: boolean;
  updatingTransactionID: number | null;
  transaction: TransactionDataType;
}

const UpdateTransaction = ({
  setIsUpdateTransactionModalOpen,
  isUpdateTransactionModalOpen,
  updatingTransactionID,
  transaction
}: UpdateTransactionProps) => {
  const [updatedTransactionData, setUpdatedTransactionData] = useState<
    TransactionDataType
  >({
    id: null,
    transaction_name: "",
    type: "credit",
    category: "Youtube Premium",
    amount: 0,
    date: "",
  });

  const transactionsStoreContext = useContext<TransactionsStore | null>(
    TransactionsStoreContext
  );
  function updateTransactionHandler(
    event: React.FormEvent<HTMLFormElement>
  ): void {
    event.preventDefault();
    setIsUpdateTransactionModalOpen(false);
    updateTransactionAPI(
      updatedTransactionData,
      updatingTransactionID,
      transactionsStoreContext
    );
  }

  function onChangeHandler(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value } = event.target;
    setUpdatedTransactionData(
      (prevData): TransactionDataType => {
        return {
          ...prevData,
          [name]: value,
        };
      }
    );
  }

  function closeModal(): void {
    setIsUpdateTransactionModalOpen(false);
  }

  return (
    <ReactModal isOpen={isUpdateTransactionModalOpen} style={customStyles}>
      <div>
        <div className="head">
          <h1 className="transactionHeading">Update Transaction</h1>
          <button className="closeButton" onClick={closeModal}>
            X
          </button>
        </div>

        <form onSubmit={updateTransactionHandler} id="form">
          <div className="inputDIv">
            <span className="fieldNames">Transaction Name</span>
            <input
              className="field"
              type="text"
              placeholder="Enter Name"
              name="transaction_name"
              value={transaction.transaction_name}
              onChange={onChangeHandler}
            />
          </div>

          <div className="inputDIv">
            <span className="fieldNames">Transaction Type</span>
            <select
              className="field"
              name="type"
              value={transaction.type}
              onChange={onChangeHandler}
            >
              <option>credit</option>
              <option>debit</option>
            </select>
          </div>

          <div className="inputDIv">
            <span className="fieldNames">Category</span>
            <select
              className="field"
              name="category"
              value={transaction.category}
              onChange={onChangeHandler}
            >
              <option>Youtube Premium</option>
              <option>Phone Recharge</option>
              <option>Electricity Bill</option>
              <option>Outing</option>
              <option>Bike Service</option>
            </select>
          </div>

          <div className="inputDIv">
            <span className="fieldNames">Amount</span>
            <input
              className="field"
              type="text"
              name="amount"
              value={transaction.amount}
              onChange={onChangeHandler}
              placeholder="Enter Your Amount"
            />
          </div>

          <div className="inputDIv">
            <span className="fieldNames">Date</span>
            <input
              className="field"
              type="date"
              placeholder="Select Date"
              name="date"
              value={transaction.date}
              onChange={onChangeHandler}
            />
          </div>

          <button className="addTransaction" type="submit">
            Update Transaction
          </button>
        </form>
      </div>
    </ReactModal>
  );
};

export default UpdateTransaction;

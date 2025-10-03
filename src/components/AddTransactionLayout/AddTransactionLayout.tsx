import Modal from "react-modal";
import React, { ChangeEventHandler, ReactElement, useContext } from "react";
import "./AddTransactionLayout.css";
import { addTransactionDataAPI } from "../../utils/utils";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { TransactionsStoreContext } from "../../App";
import { observer } from "mobx-react";
import { NewTransactionDataType } from "../../types/types";
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
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
};

interface AddTransactionProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

function AddTransaction({ isModalOpen, setIsModalOpen }: AddTransactionProps) {
  const transactionsStoreContext = useContext<TransactionsStore | null>(
    TransactionsStoreContext
  );

  const [newTransactionData, setNewTransactionData] = useState<
    NewTransactionDataType
  >({
    id: null,
    name: "",
    type: "credit",
    category: "Youtube Premium",
    amount: null,
    date: null,
  });
  let [text, setText] = useState<string | ReactElement>("Add Transaction");

  function closeModal(): void {
    setIsModalOpen(false);
  }

  function onChangeHandler(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    const { name, value } = event.target;
    setNewTransactionData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setText(<Oval height={20} width={20} color="#4fa94d" />);

    addTransactionDataAPI(
      newTransactionData,
      setIsModalOpen,
      transactionsStoreContext
    );
  }

  return (
    <ReactModal isOpen={isModalOpen} style={customStyles}>
      <div>
        <div className="head">
          <h1 className="transactionHeading">Add Transaction</h1>
          <button className="closeButton" onClick={closeModal}>
            X
          </button>
        </div>

        <form onSubmit={onSubmitHandler} id="form">
          <div className="inputDIv">
            <span className="fieldNames">Transaction Name</span>
            <input
              className="field"
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={onChangeHandler}
            />
          </div>

          <div className="inputDIv">
            <span className="fieldNames">Transaction Type</span>
            <select className="field" name="type" onChange={onChangeHandler}>
              <option>credit</option>
              <option>debit</option>
            </select>
          </div>

          <div className="inputDIv">
            <span className="fieldNames">Category</span>
            <select
              className="field"
              name="category"
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
              onChange={onChangeHandler}
            />
          </div>

          <button className="addTransaction" type="submit">
            {text}
          </button>
        </form>
      </div>
    </ReactModal>
  );
}

export default observer(AddTransaction);

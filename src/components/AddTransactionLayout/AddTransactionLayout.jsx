import Modal from "react-modal";
import React, { useContext } from "react";
import "./AddTransactionLayout.css";
import { AddTransactionModal } from "../../App";

export function AddTransaction() {
  let isModalOpen = useContext(AddTransactionModal);
  function closeModal() {
    isModalOpen.setIsModalOpen(false);
  }
  return (
    <div className="addTransactionModal">
      <Modal isOpen={isModalOpen.isModalOpen}>
        <div className="head">
          <h1>Add Transaction</h1>
          <button className="closeButton" onClick={closeModal}>
            X
          </button>
        </div>
        <form>
          <div className="inputDIv">
            <span>Transaction Name</span>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="inputDIv">
            <span>Transaction Type</span>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="inputDIv">
            <span>Category</span>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="inputDIv">
            <span>Amount</span>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="inputDIv">
            <span>Date</span>
            <input type="date" placeholder="Enter Name" />
          </div>
          <button className="addTransaction">Add Transaction</button>
        </form>
      </Modal>
    </div>
  );
}

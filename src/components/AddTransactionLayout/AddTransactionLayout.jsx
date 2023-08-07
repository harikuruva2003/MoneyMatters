import Modal from "react-modal";
import React from "react";
import "./AddTransactionLayout.css";

const customStyles = {
  content: {
    width: "30%",
    top: "40%",
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
export function AddTransaction({ isModalOpen, setIsModalOpen }) {
  function closeModal() {
    setIsModalOpen(false);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(event.target);
    setIsModalOpen(false);
  }

  return (
    <Modal isOpen={isModalOpen} style={customStyles}>
      <div>
        <div className="head">
          <h1>Add Transaction</h1>
          <button className="closeButton" onClick={closeModal}>
            X
          </button>
        </div>

        <form onSubmit={onSubmitHandler}>
          <div className="inputDIv">
            <span>Transaction Name</span>
            <input className="field" type="text" placeholder="Enter Name" />
          </div>

          <div className="inputDIv">
            <span>Transaction Type</span>
            <select className="field" placeholder="Select Transaction Type">
              <option>Shopping</option>
              <option>Youtube Premium</option>
              <option>Phone Recharge</option>
              <option>Electricity Bill</option>
              <option>Outing</option>
              <option>Bike Service</option>
            </select>
          </div>

          <div className="inputDIv">
            <span>Category</span>
            <select className="field">
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
              <option>kjhsfd</option>
            </select>
          </div>

          <div className="inputDIv">
            <span>Amount</span>
            <input
              className="field"
              type="text"
              placeholder="Enter Your Amount"
            />
          </div>

          <div className="inputDIv">
            <span>Date</span>
            <input className="field" type="date" placeholder="Select Date" />
          </div>

          <button className="addTransaction" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    </Modal>
  );
}

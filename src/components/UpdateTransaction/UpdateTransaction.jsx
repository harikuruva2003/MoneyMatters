import Modal from "react-modal";
import React from "react";
const customStyles = {
  content: {
    width: "20%",
    height: "55%",
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
export const UpdateTransaction = ({
  setIsUpdateTransactionModalOpen,
  isUpdateTransactionModalOpen,
}) => {
  function onSubmitHandler() {}
  function onChangeHandler() {}

  function closeModal() {
    setIsUpdateTransactionModalOpen(false);
  }
  return (
    <Modal isOpen={isUpdateTransactionModalOpen} style={customStyles}>
      <div>
        <div className="head">
          <h1 className="transactionHeading">Update Transaction</h1>
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
            Update Transaction
          </button>
        </form>
      </div>
    </Modal>
  );
};

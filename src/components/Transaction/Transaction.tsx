
import { observer } from "mobx-react";
import React, { useState } from "react";

import TransactionDeleteIcon from "../../icons/TransactionDelete/TransactionDelete";
import TransactionDownArrow from "../../icons/TransactionDownArrow/TransactionDownArrow";
import TransactionPencil from "../../icons/TransactionPencil/TransactionPencil";
import TransactionUpArrow from "../../icons/TransactionUpArrow/TransactionUpArrow";
import { TransactionDataType } from "../../types/types";

import { DeleteTransaction } from "../DeleteTransaction/DeleteTransaction";
import UpdateTransaction from "../UpdateTransaction/UpdateTransaction";

import "./Transaction.css";

interface FinalDataProps {
  transaction: TransactionDataType;
  pageData: TransactionDataType[];
  redColor: string;
  greenColor: string;
}

const  FinalData = (props: FinalDataProps):React.ReactElement => {
  const {transaction,pageData,redColor,greenColor} = props
  const [
    isDeleteTransactionModalOpen,
    setIsDeleteTransactionModalOpen,
  ] = useState<boolean>(false);

  const [
    isUpdateTransactionModalOpen,
    setIsUpdateTransactionModalOpen,
  ] = useState<boolean>(false);

  const [deletingTransactionID, setDeletingTransactionID] = useState<
    number | null
  >(null);

  const [updatingTransactionID, setUpdatingTransactionID] = useState<
    number | null
  >(null);

  let indexOfTransaction: number;

  indexOfTransaction = pageData.indexOf(transaction);

  let arrowAndPrice : {arrow : React.ReactNode, amount : React.ReactNode} = {
    arrow: (
      <span>
        <TransactionUpArrow fill={greenColor} />
      </span>
    ),
    amount: (
      <span style={{ color: "#16DBAA" }}>{"+" + transaction.amount}</span>
    )
  };

  if (transaction.type === "credit") {
    arrowAndPrice.arrow = (
      <span>
        <TransactionUpArrow fill={greenColor} />
      </span>
    );
    arrowAndPrice.amount = (
      <span style={{ color: "#16DBAA" }}>{"+" + transaction.amount}</span>
    );
  } else {
    arrowAndPrice.arrow = (
      <span>
        <TransactionDownArrow fill={redColor} />
      </span>
    );
    arrowAndPrice.amount = (
      <span style={{ color: "#FE5C73" }}>{"-" + transaction.amount}</span>
    );
  }

  function setDeleteTransactionContext(): void {
    setDeletingTransactionID(transaction.id);
    setIsDeleteTransactionModalOpen(true);
  }

  function openUpdateTransactionModal(): void {
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
          {transaction.date.toString().substring(0, 10)}
        </span>
        <span className="amount dataStyles">{arrowAndPrice.amount}</span>
        <button
          className="editOption dataStyles"
          onClick={openUpdateTransactionModal}
        >
          <TransactionPencil fill={"#2D60FF"} />
        </button>
        <button className="trashBin" onClick={setDeleteTransactionContext}>
          <TransactionDeleteIcon fill={"#2D60FF"} />
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
        transaction={transaction}
      />
    </div>
  );
}

export default observer(FinalData);
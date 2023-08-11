import { observable, makeObservable, computed, action } from "mobx";

class TransactionsStore {
  transactionsList;
  debitTotalAmount;
  creditTotalAmount;
  lastTransactionsList;

  constructor() {
    this.transactionsList = null;
    this.lastTransactionsList = null;

    this.debitTotalAmount = "";
    this.creditTotalAmount = "";

    makeObservable(this, {
      transactionsList: observable,
      creditTotalAmount: observable,
      debitTotalAmount: observable,
      lastTransactionsList: observable,

      creditData: computed,
      debitData: computed,

      addTransactionDataToTransactionList: action,
      addTransactionToTransactionLIst: action,
      creditTotalAmountAction: action,
      debitTotalAmountAction: action,
      updateTransaction: action,
      deleteTransaction: action,
      addLastTransactionDataToLastTransactionList: action,
    });
  }

  get creditData() {
    let arrayOfCreditData = this.transactionsList.filter((transaction) => {
      return transaction.type === "credit";
    });
    return arrayOfCreditData;
  }

  get debitData() {
    let arrayOfDebitData = this.transactionsList.filter((transaction) => {
      return transaction.type === "debit";
    });
    return arrayOfDebitData;
  }

  addTransactionDataToTransactionList(transactionsData) {
    this.transactionsList = [...transactionsData];
  }

  addTransactionToTransactionLIst(transaction) {
    this.transactionsList = [...this.transactionsList, transaction];
  }

  creditTotalAmountAction(creditTotal) {
    this.creditTotalAmount = creditTotal;
  }

  debitTotalAmountAction(debitTotal) {
    this.debitTotalAmount = debitTotal;
  }

  addLastTransactionDataToLastTransactionList(lastTransactionsData) {
    this.lastTransactionsList = [...lastTransactionsData];
  }

  deleteTransaction(transactionId) {
    let updatedTransactionsList = this.transactionsList.filter(
      (transaction) => {
        return transaction.id !== transactionId;
      }
    );
    this.transactionsList = updatedTransactionsList;

    let updatedLastThreeTransactionsList = this.lastTransactionsList.filter(
      (transaction) => {
        return transaction.id !== transactionId;
      }
    );
    this.lastTransactionsList = updatedLastThreeTransactionsList;
  }

  updateTransaction(updatingTransactionID, updatedTransactionData) {
    let indexOfTransaction = this.transactionsList.findIndex(checkTransaction);

    function checkTransaction(transaction) {
      return transaction.id === updatingTransactionID;
    }

    this.transactionsList[indexOfTransaction] = updatedTransactionData;
    // let newTransactionList = this.transactionsList;
    // let transaction = newTransactionList.filter((transaction) => {
    //   return updatingTransactionID === transaction.id;
    // });

    // let indexOfTransaction = newTransactionList.findIndex(checkTransaction);
    // console.log(indexOfTransaction, " ", transaction);

    // newTransactionList.splice(indexOfTransaction - 1, transaction);
    // newTransactionList.splice(
    //   indexOfTransaction - 1,
    //   0,
    //   updatedTransactionData
    // );

    // this.transactionsList = newTransactionList;
  }
}
export default TransactionsStore;

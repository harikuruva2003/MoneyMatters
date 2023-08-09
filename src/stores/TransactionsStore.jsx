import { observable, makeObservable, computed, action } from "mobx";

class TransactionsStore {
  transactionsList;
  debitData;

  constructor() {
    this.transactionsList = [];

    makeObservable(this, {
      transactionsList: observable,

      creditData: computed,
      debitData: computed,

      addTransactionDataToTransactionList: action,
      addTransactionToTransactionLIst: action,
      updateTransaction: action,
      deleteTransaction: action,
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
    this.transactionsList = [...this.transactionsList, ...transactionsData];
  }
  addTransactionToTransactionLIst() {}
  updateTransaction() {}
  deleteTransaction() {}
}
export default TransactionsStore;

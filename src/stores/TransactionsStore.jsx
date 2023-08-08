import { observable, makeObservable, action } from "mobx";

class TransactionsStore {
  transactionsList;

  constructor() {
    this.transactionsList = [];

    makeObservable(this, {
      transactionsList: observable,
      addTransactionDataToTransactionList: action,
      addTransactionToTransactionLIst: action,
      updateTransaction: action,
      deleteTransaction: action,
    });
  }

  addTransactionDataToTransactionList(transactionsData) {
    this.transactionsList = [...this.transactionsList, ...transactionsData];
  }
  addTransactionToTransactionLIst() {}
  updateTransaction() {}
  deleteTransaction() {}
}
export default TransactionsStore;

import { observable, makeObservable, computed, action } from "mobx";
import { TransactionDataType } from "../types/types";

class TransactionsStore {
  transactionsList: TransactionDataType[];
  debitTotalAmount: number;
  creditTotalAmount: number;
  lastTransactionsList: TransactionDataType[];

  constructor() {
    this.transactionsList = [];
    this.lastTransactionsList = [];

    this.debitTotalAmount = 0;
    this.creditTotalAmount = 0;

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

  get creditData(): TransactionDataType[] {
    const arrayOfCreditData: TransactionDataType[] =
      this.transactionsList.filter(
        (transaction: TransactionDataType): boolean =>
          transaction.type === "credit"
      );
    return arrayOfCreditData;
  }

  get debitData(): TransactionDataType[] {
    const arrayOfDebitData: TransactionDataType[] =
      this.transactionsList.filter(
        (transaction: TransactionDataType): boolean =>
          transaction.type === "debit"
      );
    return arrayOfDebitData;
  }

  addTransactionDataToTransactionList(
    transactionsData: TransactionDataType[]
  ): void {
    this.transactionsList = [...transactionsData];
  }

  addTransactionToTransactionLIst(transaction: TransactionDataType): void {
    this.transactionsList = [...this.transactionsList, transaction];
  }

  creditTotalAmountAction(creditTotal: number): void {
    this.creditTotalAmount = creditTotal;
  }

  debitTotalAmountAction(debitTotal: number): void {
    this.debitTotalAmount = debitTotal;
  }

  addLastTransactionDataToLastTransactionList(
    lastTransactionsData: TransactionDataType[]
  ): void {
    this.lastTransactionsList = [...lastTransactionsData];
  }

  deleteTransaction(transactionId: number): void {
    const updatedTransactionsList: TransactionDataType[] =
      this.transactionsList.filter((transaction: TransactionDataType) => {
        return transaction.id !== transactionId;
      });
    this.transactionsList = updatedTransactionsList;

    const updatedLastThreeTransactionsList: TransactionDataType[] =
      this.lastTransactionsList.filter((transaction: TransactionDataType) => {
        return transaction.id !== transactionId;
      });
    this.lastTransactionsList = updatedLastThreeTransactionsList;
  }

  updateTransaction(
    updatingTransactionID: number,
    updatedTransactionData: TransactionDataType
  ): void {
    const indexOfTransaction: number =
      this.transactionsList.findIndex(checkTransaction);

    function checkTransaction(transaction: TransactionDataType): boolean {
      return transaction.id === updatingTransactionID;
    }

    this.transactionsList[indexOfTransaction] = updatedTransactionData;

    const indexOfTransactionInLastTransactions =
      this.lastTransactionsList.findIndex(checkTransactionInLastTransactions);

    function checkTransactionInLastTransactions(
      transaction: TransactionDataType
    ): boolean {
      return transaction.id === updatingTransactionID;
    }

    this.lastTransactionsList[indexOfTransactionInLastTransactions] =
      updatedTransactionData;
  }
}
export default TransactionsStore;

export interface UpdatedTransactionDataType {
  transaction_name: string;
  type: string;
  category: string;
  amount: number;
  date: Date;
}
export interface NewTransactionDataType {
  name: string;
  type: string;
  category: string;
  amount: number;
  date: Date;
}

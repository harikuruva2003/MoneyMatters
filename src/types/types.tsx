export interface UpdatedTransactionDataType {
  transaction_name: string;
  type: string;
  category: string;
  amount: number | null;
  date: Date | null;
}
export interface NewTransactionDataType {
  name: string;
  type: string;
  category: string;
  amount: number | null;
  date: Date | null;
}

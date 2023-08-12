import { ReactElement } from "react";

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
export interface SidebarBoardNameAndIconType {
  boardID: string;
  icon: ReactElement;
  boardName: string;
  currentActiveBoardID: string;
  onChangeTab: (id: string) => void;
}

export interface TransactionPagesType {
  transactionPageName: string;
  id: string;
}

export interface HeaderAndAddTransactionPropsType {
  transactionHeading: String;
  addTransactionButton: String;
}

export interface CreditAndDebitCardsDataType {
  money: boolean | string;
  text: string;
  image: string;
}

export interface SideBarBoardsType {
  id: string;
  boardName: string;
  icon: ReactElement;
}

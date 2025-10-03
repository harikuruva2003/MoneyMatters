import { ReactElement } from "react";

export interface TransactionDataType {
  id: number | null;
  transaction_name: string;
  type: string;
  category: string;
  amount: number | string;
  date: string | number;
}

export interface NewTransactionDataType {
  id: number | null;
  name: string;
  type: string;
  category: string;
  amount: number | string | null;
  date: string | number | null;
}
export interface SidebarBoardNameAndIconType {
  boardId: string;
  icon: ReactElement;
  boardName: string;
  currentActiveBoardId: string;
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
  money: string;
  text: string;
  image: string;
}

export interface SideBarBoardsType {
  id: string;
  boardName: string;
  icon: ReactElement;
}

export interface BottomProfile {
  profilePic: ReactElement;
  profileName: string;
  profileMail: string;
  logOutIcon: ReactElement;
}

export interface IconsType {
  fill: string;
}

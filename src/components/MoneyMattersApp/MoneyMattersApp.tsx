import "./MoneyMattersApp.css";
import { SideBar } from "../Sidebar/Sidebar";
import HomeIcon from "../../icons/HomeIcon/HomeIcon";
import TransactionsIcon from "../../icons/TransactionIcon/Transaction";
import ProfileIcon from "../../icons/ProfileIcon/profileIcon";
import Logo from "../../icons/Logo/Logo";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { TransactionBoardDataPage } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import React from "react";
import DashBoardPage from "../DashBoardPage/DashBoardPage";
import LogOutIcon from "../../icons/LogOutIcon/logoutIcon";
import { observer } from "mobx-react";
import { TransactionsStoreContext } from "../../App";
import { allTransactionsDataAPI } from "../../utils/utils";
import TransactionsStore from "../../stores/TransactionsStore";
import { SideBarBoardsType } from "../../types/types";

export const ActivePageContext = createContext(null);
export const CurrentActiveBoardID = createContext(null);
export const Error = createContext(null);

function MoneyMattersApp() {
  const [currentActiveBoardID, setCurrentActiveBoardID] = useState<
    string | null
  >("DashBoard");

  const limit: number = 20;
  const offSetValue: number = 0;
  const [allTransactionsError, setAllTransactionsError] = useState<boolean>(
    false
  );

  const transactionsStoreContext: TransactionsStore | null = useContext(
    TransactionsStoreContext
  );

  const sideBarBoards: SideBarBoardsType = [
    {
      id: "DashBoard",
      boardName: "Dashboard",
      icon: HomeIcon,
    },
    {
      id: "TransactionsBoard",
      boardName: "Transactions",
      icon: TransactionsIcon,
    },
    {
      id: "ProfileBoard",
      boardName: "Profile",
      icon: ProfileIcon,
    },
  ];
  const logoMoneyMatters = {
    logo: <Logo />,
    money: "Money",
    matters: "Matters",
  };
  const profile = {
    profilePic: <ProfileIcon />,
    profileName: "Hari Kuruva",
    profileMail: "harikuruva2003@gmail.com",
    logOutIcon: <LogOutIcon />,
  };

  useEffect(() => {
    // allTransactionsDataAPI(
    //   setAllTransactionsError,
    //   limit,
    //   offSetValue,
    //   transactionsStoreContext
    // );
  }, []);

  function setError(): void {
    setAllTransactionsError(false);
    allTransactionsDataAPI(
      setAllTransactionsError,
      limit,
      offSetValue,
      transactionsStoreContext
    );
  }

  function currentBoardData() {
    switch (currentActiveBoardID) {
      case "DashBoard":
        return <DashBoardPage />;

      case "TransactionsBoard":
        return !allTransactionsError ? (
          <TransactionBoardDataPage />
        ) : (
          <div>
            <h1>Something went wrong</h1>
            <button onClick={setError}>Try Again</button>
          </div>
        );

      case "ProfileBoard":
        return <ProfilePage />;

      default:
        return [];
    }
  }

  return (
    <div className="moneyMattersAllTransactions">
      <CurrentActiveBoardID.Provider value={currentActiveBoardID}>
        <div className="sidBar">
          <SideBar
            sideBarBoards={sideBarBoards}
            logo={logoMoneyMatters}
            profile={profile}
            setCurrentActiveBoardID={setCurrentActiveBoardID}
          />
        </div>
        <div className="transactionPage">{currentBoardData()}</div>
      </CurrentActiveBoardID.Provider>
    </div>
  );
}
export default observer(MoneyMattersApp);

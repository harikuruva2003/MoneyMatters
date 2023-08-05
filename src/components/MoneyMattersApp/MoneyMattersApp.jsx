import "./MoneyMattersApp.css";
import { SideBar } from "../Sidebar/Sidebar";
import HomeIcon from "../../icons/HomeIcon/HomeIcon";
import TransactionsIcon from "../../icons/TransactionIcon/Transaction";
import ProfileIcon from "../../icons/ProfileIcon/profileIcon";
import Logo from "../../icons/Logo/Logo";
import { createContext, useEffect, useRef, useState } from "react";
import { TransactionBoardDataPage } from "../TransactionBoardDataPage/TransactionBoardDataPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import React from "react";
import { allTransactionsDataAPI } from "../../utils/utils";
import { DashBoardPage } from "../DashBoardPage/DashBoardPage";
import LogOutIcon from "../../icons/LogOutIcon/logoutIcon";

export const ActivePageContext = createContext(null);
export const CurrentActiveBoardID = createContext(null);
export const Error = createContext(null);

export function MoneyMattersApp() {
  let limit = 20;
  let offSetValue = 0;
  let activeBoardRef = useRef(null);
  const [currentActiveBoardID, setCurrentActiveBoardID] = useState("DashBoard");
  activeBoardRef.current = currentActiveBoardID;

  const [allTransactionsData, setAllTransactionsData] = useState(null);
  const [creditData, setCreditData] = useState(null);
  const [debitData, setDebitData] = useState(null);
  const [allTransactionsError, setAllTransactionsError] = useState(false);

  const sideBarBoards = [
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
    allTransactionsDataAPI({
      setAllTransactionsData,
      setDebitData,
      setCreditData,
      setAllTransactionsError,
      limit,
      offSetValue,
    });
  }, []);

  function setError() {
    setAllTransactionsError(false);
    allTransactionsDataAPI({
      setAllTransactionsData,
      setDebitData,
      setCreditData,
      setAllTransactionsError,
      limit,
      offSetValue,
    });
  }

  function currentBoardData() {
    switch (activeBoardRef.current) {
      case "DashBoard":
        return <DashBoardPage />;

      case "TransactionsBoard":
        return !allTransactionsError ? (
          <TransactionBoardDataPage
            allTransactionsData={allTransactionsData}
            debitData={debitData}
            creditData={creditData}
          />
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

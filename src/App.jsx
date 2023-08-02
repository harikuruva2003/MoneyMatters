import "./App.css";
import { SideBar } from "./components/Sidebar/Sidebar";
import HomeIcon from "./icons/HomeIcon/HomeIcon";
import TransactionsIcon from "./icons/TransactionIcon/Transaction";
import ProfileIcon from "./icons/ProfileIcon/profileIcon";
import LogOutIcon from "./icons/LogOutIcon/logoutIcon";
import Logo from "./icons/Logo/Logo";
import { createContext, useRef, useState } from "react";
import { TransactionBoardDataPage } from "./components/TransactionBoardDataPage/TransactionBoardDataPage";
import { DashBoardPage } from "./components/DashBoardPage/DashBoardPage";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import React from "react";

export const ActivePageContext = createContext(null);
export const CurrentActiveBoardID = createContext(null);

function App() {
  let activeBoardRef = useRef(null);
  const [currentActiveBoardID, setCurrentActiveBoardID] = useState("DashBoard");
  activeBoardRef.current = currentActiveBoardID;

  const sideBarBoards = [
    {
      id: "DashBoard",
      boardName: "Dashboard",
      icon: HomeIcon,
      isSelected: false,
    },
    {
      id: "TransactionsBoard",
      boardName: "Transactions",
      icon: TransactionsIcon,
      isSelected: true,
    },
    {
      id: "ProfileBoard",
      boardName: "Profile",
      icon: ProfileIcon,
      isSelected: false,
    },
  ];

  const Logo_MoneyMatters = {
    logo: <Logo />,
    money: "Money",
    matters: "Matters",
  };

  const PROFILE = {
    profilePic: <ProfileIcon />,
    profileName: "Hari Kuruva",
    profileMail: "harikuruva2003@gmail.com",
    logOutIcon: <LogOutIcon />,
  };

  function currentBoardData() {
    switch (activeBoardRef.current) {
      case "DashBoard":
        return <DashBoardPage />;

      case "TransactionsBoard":
        return <TransactionBoardDataPage />;

      case "ProfileBoard":
        return <ProfilePage />;

      default:
        return [];
    }
  }

  return (
    <div className="MoneyMatters_AllTransactions">
      <CurrentActiveBoardID.Provider value={currentActiveBoardID}>
        <div className="sidBar">
          <SideBar
            sideBarBoards={sideBarBoards}
            logo={Logo_MoneyMatters}
            profile={PROFILE}
            setCurrentActiveBoardID={setCurrentActiveBoardID}
          />
        </div>
        <div className="transactionPage">{currentBoardData()}</div>
      </CurrentActiveBoardID.Provider>
    </div>
  );
}

export default App;

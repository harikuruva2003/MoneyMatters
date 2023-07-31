import "./App.css";
import { SideBar } from "./components/Sidebar/Sidebar";
import HomeIcon from "./icons/HomeIcon/HomeIcon";
import TransactionsIcon from "./icons/TransactionIcon/Transaction";
import ProfileIcon from "./icons/ProfileIcon/profileIcon";
import LogOutIcon from "./icons/LogOutIcon/logoutIcon";
import Logo from "./icons/Logo/Logo";
import { TransactionHeader } from "./components/TransctionsPageHeader/TransctionsPageHeader";
import { TransactionsPageTransactions } from "./components/TransactionsPageTransactions/TransactionsPageTransactions";
import { createContext, useState } from "react";

export const ActivePageContext = createContext(null);
export const CurrentActiveBoard = createContext(null);

function App() {
  const [currentActivePageID, setCurrentActivePageID] =
    useState("AllTransactions");
  const [currentActiveBoardID, setCurrentActiveBoardID] =
    useState("TransactionsBoard");
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

  return (
    <div className="MoneyMatters_AllTransactions">
      <CurrentActiveBoard.Provider value={currentActiveBoardID}>
        <div className="sidBar">
          <SideBar
            sideBarBoards={sideBarBoards}
            logo={Logo_MoneyMatters}
            profile={PROFILE}
            setCurrentActiveBoardID={setCurrentActiveBoardID}
          />
        </div>
        <div className="transactionPage bg-red-200">
          <ActivePageContext.Provider value={currentActivePageID}>
            <TransactionHeader
              setCurrentActivePageID={setCurrentActivePageID}
            />
            <TransactionsPageTransactions />
          </ActivePageContext.Provider>
        </div>
      </CurrentActiveBoard.Provider>
    </div>
  );
}

export default App;

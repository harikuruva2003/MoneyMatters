import "./App.css";
import { SideBar } from "./components/Sidebar/Sidebar";
import HomeIcon from "./icons/HomeIcon/HomeIcon";
import TransactionsIcon from "./icons/TransactionIcon/Transaction";
import ProfileIcon from "./icons/ProfileIcon/profileIcon";
import LogOutIcon from "./icons/LogOutIcon/logoutIcon";
import Logo from "./icons/Logo/Logo";
import { TransactionHeader } from "./components/TransctionsPageHeader/TransactionHeader";
import { TransactionsPageTransactions } from "./components/TransactionsPageTransactions/TransactionsPageTransactions";
import { createContext, useState } from "react";

export const ActivePageContext = createContext(null);
function App() {
  const [currentActivePageID, setcurrentActivePageID] =
    useState("AllTransactions");

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
      <div className="sidBar">
        <SideBar
          sideBarBoards={sideBarBoards}
          logo={Logo_MoneyMatters}
          profile={PROFILE}
        />
      </div>
      <div className="transactionPage">
        <ActivePageContext.Provider value={currentActivePageID}>
          <TransactionHeader setcurrentActivePageID={setcurrentActivePageID} />
          <TransactionsPageTransactions />
        </ActivePageContext.Provider>
      </div>
    </div>
  );
}

export default App;

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
import { CompanyDataStoreContext, TransactionsStoreContext } from "../../App";
import { observer } from "mobx-react";
import { useQuery } from "@apollo/client";
import { Company } from "../../graphQL/GraphQLQueries";

export const ActivePageContext = createContext(null);
export const CurrentActiveBoardID = createContext(null);
export const Error = createContext(null);

const MoneyMattersApp = () => {
  let activeBoardRef = useRef(null);

  const [currentActiveBoardID, setCurrentActiveBoardID] = useState("DashBoard");
  activeBoardRef.current = currentActiveBoardID;

  const [allTransactionsError, setAllTransactionsError] = useState(false);
  const transactionsStoreContext = useContext(TransactionsStoreContext);
  const companyDataStoreContext = useContext(CompanyDataStoreContext);

  useEffect(() => {
    // allTransactionsDataAPI({
    //   setAllTransactionsError,
    //   limit,
    //   offSetValue,
    //   transactionsStoreContext,
    // });
  }, []);

  // const { loading, error, data } = useQuery(Company);
  // if (loading) return "loading ...";
  // if (error) return `error ${error.message}`;
  // companyDataStoreContext.getCompanyData(data);

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

  function setError() {
    // setAllTransactionsError(false);
    // allTransactionsDataAPI({
    //   setAllTransactionsError,
    //   limit,
    //   offSetValue,
    //   transactionsStoreContext,
    // });
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
};
export default observer(MoneyMattersApp);

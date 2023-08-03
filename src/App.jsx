import "./App.css";
import { SideBar } from "./components/Sidebar/Sidebar";
import HomeIcon from "./icons/HomeIcon/HomeIcon";
import TransactionsIcon from "./icons/TransactionIcon/Transaction";
import ProfileIcon from "./icons/ProfileIcon/profileIcon";
import LogOutIcon from "./icons/LogOutIcon/logoutIcon";
import Logo from "./icons/Logo/Logo";
import { createContext, useEffect, useRef, useState } from "react";
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

  const [allTransactionsData, setAllTransactionsData] = useState(null);
  const [creditData, setCreditData] = useState(null);
  const [debitData, setDebitData] = useState(null);
  const [lastTransactions, setLastTransactions] = useState(null);
  console.log(lastTransactions);

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
  useEffect(() => {
    fetch(
      "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=20&offset=0",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "user",
          "x-hasura-user-id": "1",
        },
      }
    )
      .then((data) => data.json())

      .then((data) => {
        setAllTransactionsData(data);
        let debit_Data = [];
        let credit_Data = [];
        let transactions = [];
        data.transactions.forEach((transaction) => {
          transaction.type === "credit"
            ? credit_Data.push(transaction)
            : debit_Data.push(transaction);
        });
        setDebitData(debit_Data);
        setCreditData(credit_Data);

        data.transactions
          .slice(data.transactions.length - 3, data.transactions.length)
          .forEach((transaction) => {
            transactions.push(transaction);
          });
        setLastTransactions(transactions);
      })

      .catch((err) => console.log("error " + err));
  }, []);

  function currentBoardData() {
    switch (activeBoardRef.current) {
      case "DashBoard":
        return <DashBoardPage lastTransactions={lastTransactions} />;

      case "TransactionsBoard":
        return (
          <TransactionBoardDataPage
            allTransactionsData={allTransactionsData}
            debitData={debitData}
            creditData={creditData}
          />
        );

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

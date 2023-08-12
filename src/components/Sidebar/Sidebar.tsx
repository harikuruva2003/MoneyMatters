import { SidebarItem } from "../SideBarItems/SideBarItems";
import { Profile } from "../SideBarProfile/SIdeBarProfile";
import "./Sidebar.css";
import React from "react";

export function SideBar(
  sideBarBoards,
  logo,
  profile,
  setCurrentActiveBoardID: string
): {} {
  function Logo(logoMoneyMatters) {
    return (
      <div className="logo">
        <span>{logoMoneyMatters.logo}</span>
        <div className="moneyMatters">
          <span className="money">{logoMoneyMatters.money}</span>
          <span className="matters">{logoMoneyMatters.matters}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="sideBarComponentsContainer">
      <div className="logoAndBoards">
        <Logo logoMoneyMatters={logo} />
        <SidebarItem
          sideBarBoards={sideBarBoards}
          setCurrentActiveBoardID={setCurrentActiveBoardID}
        />
      </div>
      <div>
        <Profile profile={profile} />
      </div>
    </div>
  );
}

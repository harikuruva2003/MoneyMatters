import { createContext } from "react";
import { ReturnSidebarItem } from "../SideBarItems/SideBarItems";
import { Profile } from "../SideBarProfile/SIdeBarProfile";
import "./Sidebar.css";

export const CurrentActiveBoardID = createContext(null);

export function SideBar({
  sideBarBoards,
  logo,
  profile,
  setCurrentActiveBoardID,
}) {
  function Logo({ logo_MoneyMatters }) {
    return (
      <div className="logo">
        <span>{logo_MoneyMatters.logo}</span>
        <div className="moneyMatters">
          <span className="money">{logo_MoneyMatters.money}</span>
          <span className="matters">{logo_MoneyMatters.matters}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="sideBarComponentsContainer">
      <div className="logoAndBoards">
        <div>
          <Logo logo_MoneyMatters={logo} />
        </div>
        <ReturnSidebarItem
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

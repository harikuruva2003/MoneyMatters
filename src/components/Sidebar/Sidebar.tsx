import { observer } from "mobx-react";
import React from "react";
import { BottomProfile, SideBarBoardsType } from "../../types/types";
import SideBarItems from "../SideBarItems/SideBarItems";
import "./Sidebar.css";


import Profile from "../Profile/Profile";

interface Props {
  
  sideBarBoards:SideBarBoardsType[],
  logo: {logo:React.ReactElement,money:string,matters:string},
  profile: BottomProfile,
  
  setCurrentActiveBoardID: (value : string)=>void}


const  SideBar=(props: Props

):React.ReactElement => {
  const {sideBarBoards,logo,profile,setCurrentActiveBoardID}=props

  const renderLogo = ()=> 
     (
      <div className="logo">
        <span>{logo.logo}</span>
        <div className="moneyMatters">
          <span className="money">{logo.money}</span>
          <span className="matters">{logo.matters}</span>
        </div>
      </div>
    );
  


 

  return (
    <div className="sideBarComponentsContainer">
      <div className="logoAndBoards">
        {renderLogo()}
        <SideBarItems
          sideBarBoards={sideBarBoards as any}
          setCurrentActiveBoardID={setCurrentActiveBoardID}
        />
      </div>
      <div>
        <Profile profile={profile as any} />
      </div>
    </div>
  );
}

export default observer(SideBar)
import { useContext } from "react";
import "./SideBarItems.css";

import React from "react";
import { CurrentActiveBoardID } from "../MoneyMattersApp/MoneyMattersApp";
import { SideBarBoardsType } from "../../types/types";
import { observer } from "mobx-react";
import Board from "../Board/Board";


interface Props {
  sideBarBoards: SideBarBoardsType[],
  setCurrentActiveBoardID: (value : string)=>void
}


const SidebarItems = (
  props : Props
):React.ReactElement=>  {

  const {sideBarBoards,setCurrentActiveBoardID} = props


  let iconAndBoardName = [];
  let currentActiveBoardID = useContext(CurrentActiveBoardID);

  const onChangeTab = (boardID: string) => {
    setCurrentActiveBoardID(boardID);
  };

  sideBarBoards.forEach((board) => {
    iconAndBoardName.push(
      <Board
      key={board.boardName}
        board={board}
        currentActiveBoardId={currentActiveBoardID}
        onChangeTab={onChangeTab}
      />
    );
  });

  return <div className="boardContainer">{iconAndBoardName}</div>;
}

export default observer(SidebarItems)
import { useContext } from "react";
import "./SideBarItems.css";
import { CurrentActiveBoardID } from "../../App";
import { ReturnSidebarBoardNameAndIcon } from "../Board/Board";
import React from "react";

export function ReturnSidebarItem({ sideBarBoards, setCurrentActiveBoardID }) {
  let IconAndBoardName = [];
  let currentActiveBoardID = useContext(CurrentActiveBoardID);

  const onChangeTab = (boardID) => {
    setCurrentActiveBoardID(boardID);
  };

  sideBarBoards.forEach((board) => {
    IconAndBoardName.push(
      <ReturnSidebarBoardNameAndIcon
        boardID={board.id}
        icon={board.icon}
        boardName={board.boardName}
        key={board.boardName}
        currentActiveBoardID={currentActiveBoardID}
        onChangeTab={onChangeTab}
      />
    );
  });

  return <div className="boardContainer">{IconAndBoardName}</div>;
}

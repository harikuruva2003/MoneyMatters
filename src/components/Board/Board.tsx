import React from "react";
import "./Board.css";
import { SidebarBoardNameAndIconType } from "../../types/types";
// import { SidebarBoardNameAndIcon } from "../../types/types";

export function SidebarBoardNameAndIcon({
  boardID,
  icon: Icon,
  boardName,
  currentActiveBoardID,
  onChangeTab,
}: SidebarBoardNameAndIconType) {
  return (
    <>
      {boardID === currentActiveBoardID ? (
        <button className="boardNameButtons">
          <div className="boardHighLighter"></div>
          <div className="boardName selectedBoardStyling">
            <Icon fill="#2D60FF" />
            <span className="boardNameText" style={{ color: "#2D60FF" }}>
              {boardName}
            </span>
          </div>
        </button>
      ) : (
        <button
          className="boardNameButtons"
          onClick={() => {
            onChangeTab(boardID);
          }}
        >
          <div className="boardName">
            <Icon />
            <span className="boardNameText">{boardName}</span>
          </div>
        </button>
      )}
    </>
  );
}

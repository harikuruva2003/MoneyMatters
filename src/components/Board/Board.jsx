import React from "react";
import "./Board.css";

export function SidebarBoardNameAndIcon({
  boardID,
  icon: Icon,
  boardName,
  currentActiveBoardID,
  onChangeTab,
}) {
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

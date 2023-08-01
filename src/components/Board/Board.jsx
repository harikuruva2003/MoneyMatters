import "./Board.css";

export function ReturnSidebarBoardNameAndIcon({
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
          <div className="boardName selectedBoardstyling">
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

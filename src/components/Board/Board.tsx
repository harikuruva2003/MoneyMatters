import { observer } from "mobx-react";
import { SideBarBoardsType } from "../../types/types";
import "./Board.css";
// import { SidebarBoardNameAndIcon } from "../../types/types";


interface Props {
  board : SideBarBoardsType
  currentActiveBoardId : string
  onChangeTab : (id : string) => void
}


const  SidebarBoardNameAndIcon = (props : Props) => {
  const {board,currentActiveBoardId,onChangeTab} = props

  return (
    <>
      {board.id === currentActiveBoardId ? (
        <button className="boardNameButtons">
          <div className="boardHighLighter"></div>
          <div className="boardName selectedBoardStyling">
            {board.icon}
            <span className="boardNameText" style={{ color: "#2D60FF" }}>
              {board.boardName}
            </span>
          </div>
        </button>
      ) : (
        <button
          className="boardNameButtons"
          onClick={() => {
            onChangeTab(board.id);
          }}
        >
          <div className="boardName">
          {board.icon}
            <span className="boardNameText">{board.boardName}</span>
          </div>
        </button>
      )}
    </>
  );
}

export default observer(SidebarBoardNameAndIcon)

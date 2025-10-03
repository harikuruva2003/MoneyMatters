import { observer } from "mobx-react";

import { SideBarBoardsType } from "../../types/types";

import "./Board.css";

interface Props {
  board: SideBarBoardsType;
  currentActiveBoardId: string;

  onChangeTab: (id: string) => void;
}

const SidebarBoardNameAndIcon = (props: Props) => {
  const { board, currentActiveBoardId, onChangeTab } = props;

  const isTabSelected = board.id === currentActiveBoardId;

  const renderDefaultTab = (): React.ReactElement => (
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
  );

  const renderSelectedTab = (): React.ReactElement => (
    <button className="boardNameButtons">
      <div className="boardHighLighter"></div>
      <div className="boardName selectedBoardStyling">
        {board.icon}
        <span className="boardNameText" style={{ color: "#2D60FF" }}>
          {board.boardName}
        </span>
      </div>
    </button>
  );

  return isTabSelected ? renderSelectedTab() : renderDefaultTab();
};

export default observer(SidebarBoardNameAndIcon);

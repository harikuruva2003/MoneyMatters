import { useState } from 'react'
import './SideBarItems.css'

function ReturnSidebarBoardNameAndIcon({boardID,icon: Icon, boardname,currentActiveBoardID, onChangeTab}){

    
    return (
        <>
        {boardID === currentActiveBoardID ? <button className='boardNameButtons'><div className='boardHighLighter' ></div> <div className='boardName selectedBoardstyling'>
       <Icon fill = '#2D60FF'/>
        <span className='boardNameText' style={{color:'#2D60FF'}}>{boardname}</span>
    </div> </button>    
    :  
    <button className='boardNameButtons' onClick={() => {
        onChangeTab(boardID)
    }}>

    <div className='boardName'>
    <Icon/>
    <span className='boardNameText'>{boardname}</span>
</div>
</button>}
        </>       
    )    
}

export function ReturnSidebarItem({sideBarBoards}){

    const [currentActiveBoardID, setCurrentActiveBoardID] = useState('DashBoard')
    let IconAndBoardName = [];
    
    const onChangeTab = (boardID) => {
        setCurrentActiveBoardID(boardID)
    }

    sideBarBoards.forEach(board =>{
        IconAndBoardName.push( 
            <ReturnSidebarBoardNameAndIcon 
            
            boardID = {board.id}
            icon = {board.icon}
            boardname = {board.boardName} key={board.boardName}
            currentActiveBoardID = {currentActiveBoardID}
            onChangeTab={onChangeTab}         
            />)
    })

    return (
        <div className='boardContainer'>{IconAndBoardName}</div>
    )
}
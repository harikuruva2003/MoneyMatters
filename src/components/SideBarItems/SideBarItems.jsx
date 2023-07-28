import { useState } from 'react'
import './SideBarItems.css'

function ReturnSidebarBoardNameAndIcon({boardID,icon: Icon, boardname,currenctActiveBoardID, onChangeTab}){

    
    return (
        <>
        {boardID === currenctActiveBoardID ? <button className='boardNameButtons'><div className='boardHighLighter' ></div> <div className='boardName selectedBoardstyling'>
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

export function ReturnSidebaritem({sideBarBoards}){

    const [currenctActiveBoardID, setCurrenctActiveBoardID] = useState('DashBoard')

    let IconAndBoardName = [];

    const onChangeTab = (boardID) => {
        setCurrenctActiveBoardID(boardID)
    }

    sideBarBoards.forEach(board =>{
        IconAndBoardName.push( 
            <ReturnSidebarBoardNameAndIcon 
            
            boardID = {board.id}
            icon = {board.icon}
            boardname = {board.boardName} key={board.boardName}
            currenctActiveBoardID = {currenctActiveBoardID}
            onChangeTab={onChangeTab}         
            />)
    })

    return (
        <div className='boardContainer'>{IconAndBoardName}</div>
    )
}
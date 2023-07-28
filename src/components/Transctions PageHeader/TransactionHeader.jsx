import { useState } from 'react'
import './TransactionHeader.css'

const TractionsHeaderArray = ['Transactions', '+ Add Transaction']

const transactionPages = [
    {transactionPageName : 'All Transactions', id:'AllTransactions'},
    {transactionPageName :'Debit', id: 'Debit'},
    {transactionPageName : 'Credit', id: 'Credit'}
]


function TransactionPage({transactionPage, currentActivePageID, transactionPageID, onChangePage}){
    return (
        <>
        {currentActivePageID === transactionPageID ? <button className='transactionPagesButton transactionPageAndHighlighter'>
            <div >
                <span className='transactionPageText' style={{color:'#2D60FF'}}>{transactionPage.transactionPageName}</span>
            </div>
            <div className='transactionPageHighLighter'></div>
        </button> 
        :
        <button className='transactionPagesButton transactionPageAndHighlighter' onClick={()=>{
            onChangePage(transactionPageID)
        }}>
            
            <div >
                <span className='transactionPageText' >{transactionPage.transactionPageName}</span>
            </div>
            <div className=''></div>
        </button>
        }
        </>
    )
}


export function TransactionHeader(){

    const [currentActivePageID, setcurrentActivePageID] = useState('AllTransactions')

    let onChangePage =(pageID)=>{
        setcurrentActivePageID(pageID)
    }

    let formattedTransactionPages = transactionPages.map(transactionPage => {  
        return (      
        <TransactionPage transactionPage = {transactionPage} 
        currentActivePageID={currentActivePageID} 
        transactionPageID = {transactionPage.id} 
        onChangePage={onChangePage}
        />)
    })

    return(
        <div className='transactionHeader'>
            <div className="transactionHeadingAndButton">
                <span className='transactionHeading'>{TractionsHeaderArray[0]}</span>
                <button className='addTransactionButton'>{TractionsHeaderArray[1]}</button>
            </div>
            <div className='transactionPagesContainer'>            
                {formattedTransactionPages}
            </div>            
        </div>
    )
}
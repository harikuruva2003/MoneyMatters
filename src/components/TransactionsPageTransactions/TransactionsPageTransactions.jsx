import { Data } from '../TransactionPageData/TransactionPageData'
import './TransactionsPageTransactions.css'

const transactionFields = ['Transaction Name', 'Category', 'Date', 'Amount']

export function TransactionsPageTransactions(){
    return(
        <div className='transactionsBG'>
            <div className='transactionsFields'>
                <span className='spanElements transactionName'>{transactionFields[0]}</span>
                <span className='spanElements category'>{transactionFields[1]}</span>
                <span className='spanElements date'>{transactionFields[2]}</span>
                <span className='spanElements amount'>{transactionFields[3]}</span>                
            </div>
            <hr className='horizantalLine'></hr>          
            <div>
                <Data />
            </div>
            
        </div>
    )
}

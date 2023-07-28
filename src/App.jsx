import './App.css';
import {SideBar} from './components/Sidebar/Sidebar'
import HomeIcon from './icons/HomeIcon/HomeIcon'
import TransactionsIcon from './icons/TransactionIcon/Transaction'
import ProfileIcon from './icons/ProfileIcon/profileIcon'
import LogOutIcon from'./icons/LogOutIcon/logoutIcon'
import Logo from './icons/Logo/Logo'
import {TransactionHeader} from './components/Transctions PageHeader/TransactionHeader'
import {TransactionsPageTransactions} from './components/TransactionsPageTransactions/TransactionsPageTransactions'


function App() {
  const SIDEBARBOARDS = [
    { id:'DashBoard', boardName:'Dashboard', icon:HomeIcon, isSelected : false},
    { id:'TransactionsBoard', boardName:'Transactions', icon:TransactionsIcon, isSelected : true},
    { id:'ProfileBoard', boardName:'Profile', icon:ProfileIcon, isSelected : false}
]


const Logo_MoneyMatters= {
  logo : <Logo/>,
  money: 'Money',
  matters: 'Matters'
}

const PROFILE = {
  profilePic : <ProfileIcon/>,
  profileName : 'Hari Kuruva',
  profileMail : 'harikuruva2003@gmail.com',
  logOutIcon :<LogOutIcon/>  }


 return (    

  <div className='MoneyMatters_AllTransactions'>
    <div className='sidBar'>
      <SideBar sideBarBoards = {SIDEBARBOARDS} logo = {Logo_MoneyMatters} profile = {PROFILE}/>
    </div>
    <div className='transactionPage'>
      <TransactionHeader/>
      <TransactionsPageTransactions/>
    </div>
  </div>
)}

export default App;
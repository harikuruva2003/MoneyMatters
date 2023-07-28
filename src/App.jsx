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
  // const PRODUCTS = [

  // {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  // {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  // {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  // {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  // {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  // {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}

  // ]

  // function FilterableProductTable({products}){
  //   return(
  //     <div>
  //       <SearchBar/>
  //       <ProductTable products = {products}/>
  //     </div>
  //     )
  // }

  // function SearchBar(){
  //   return(
  //     <form>
  //       <input type='text' placeholder='Search...'/>
  //       <br/>        
  //       <label>
  //         <input type='checkbox'/>
  //         {' '}
  //         Show only stocked
  //       </label> 
  //     </form>          
  //   )
  // }

  // function ProductTable({products}){

  //   let productAndPrice = []
  //   let lastCategory = null

  //   products.forEach(product => {
  //     if (product.category !== lastCategory){
  //       productAndPrice.push(
  //         <ProductCategoryRow category = {product.category} key={product.category}/>
  //       )
  //     }

  //     productAndPrice.push(
  //       <ProductRow product = {product}
  //       key={product.name}/>
  //     )
  //     lastCategory = product.category
  //   });



  //   return (
  //     <div>
  //       <span>  Name  </span>
  //       <span>Price </span>
  //       <div>{productAndPrice}</div>
  //     </div>
  //   )  
  // }  

  // function ProductCategoryRow({category}){
  //   return(
  //     <div>
  //       <span>
  //         {category}
  //       </span>
  //     </div>
  //   )
  // }

  // function ProductRow({product}){
  //   return(
  //     <div>
  //       <span>{product.name}</span>
  //       <span>{product.price}</span>
  //     </div>
  //   )
  // }  


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
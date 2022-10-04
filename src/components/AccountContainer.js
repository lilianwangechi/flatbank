import React ,{useState,useEffect}from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const[transactions,setTransaction]=useState([]);
  const[search,setSearch]=useState("")


  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then((res)=> res.json())
    .then((data)=>setTransaction(data));
  },[]);

  

function postTransaction(transaction){
  //console.log(transaction)
    fetch("http://localhost:8001/transactions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(transaction),
  })
  .then((r)=> r.json())
  //.then(console.log)
   .then((newTransaction)=>setTransaction(transactions=>[...transactions,newTransaction]));
    
// }
}
const filteredTransactions= transactions.filter(transaction =>transaction.description.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <Search 
       search={search}
       setSearch={setSearch}
      />
      <AddTransactionForm postTransaction={postTransaction}  />
      <TransactionsList displayedTransactions={filteredTransactions} 
      //setTransaction ={setTransaction}
      
      />
    </div>
  );
}

export default AccountContainer;


import React,{useState} from "react";
//form using the input data from the prop
function AddTransactionForm({postTransaction}) {

  const[userInput,setUserInput]=useState({
  date:"",
  description:"",
  category:"",
  amount:""
})

//function for updating the user
function handleChange(event){
 setUserInput(userInput => ({...userInput,[event.target.name]:event.target.value}))
  };

function handleSubmit(event){
event.preventDefault();
postTransaction(userInput)

};

  return (
    <div className="ui segment">
        <form onSubmit ={handleSubmit} className="ui form">
        <div className="inline fields">
         

        <input type="date" onChange={handleChange} name="date" value={userInput.date} />
          <input type="text" onChange={handleChange} name="description"  value={userInput.description} placeholder="Description" />
          <input type="text" onChange={handleChange} name="category" value={userInput.category} placeholder="Category" />
          <input type="number" onChange={handleChange} name="amount"value={userInput.amount}  placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;

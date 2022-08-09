import './ExpenseItem.css';
import React,{useState} from 'react';// useState is a HOOK in react library 
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
let ExpenseItem=(props)=>{
  
  const [newtitle, setNewTitle]=useState("");

  const [title, setTitle]=useState(props.title);// useState function imported from react liberary and then can be used this function take one argument ,it return array and a function  

  let clickHandler = () => {
    setTitle(newtitle);
  }

  let changeHandler= (event) => {
   setNewTitle(event.target.value);
  }

     return (
       <Card className="expense-item">
        <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}
                </div>
            </div>
            <input type="text" value={newtitle} onChange={changeHandler} />
            <button onClick={ clickHandler }>change title</button>
       </Card>
     );
}
export default ExpenseItem;
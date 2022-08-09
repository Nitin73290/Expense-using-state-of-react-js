import Expenses from "./Components/Expenses/Expenses";
//import SubComponent from './Components/SubComponent';
import React from 'react';
let  App=()=>{
    // let expenseDate=new Date(2022,3,28);
    // let expenseTitle="School Fee";
    // let expenseAmount=300;
    let expenses=[
        {
            id:'e1',
            title:'school fee',
            amount:230,
            date:new Date(2022,5,12)
        },
        {
            id:'e2',
            title:'Books',
            amount:250,
            date:new Date(2022,2,2)
        },
        {
            id:'e3',                                                                                                                                                                           
            title:'House Rent',
            amount:700,
            date:new Date(2022,4,7)
        },
        {
            id:'e4',
            title:'Food',
            amount:500,
            date:new Date(2022,3,23)
        }

    ];
    // return <h3>First component</h3>;
    //use div to return multiple line
    return (
        <div>
            <h2>Let's gets started</h2>
            <Expenses item={expenses}/>

        </div>
    );
}
export default App;
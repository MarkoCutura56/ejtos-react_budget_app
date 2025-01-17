import React, { useContext, useState } from 'react';
import { AppContext, AppReducer } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [upperLimit, setupperLimit] = useState(20000);
    const { dispatch } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const {currency} =useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        
        if(event.target.value  <= upperLimit && totalExpenses <= event.target.value)
        {
            //setNewBudget(event.target.value);
            dispatch({type :'SET_BUDGET',payload: event.target.value,});
            
        }      
        else if(event.target.value  > upperLimit)
        {
            alert("Value cant exceed "+String(upperLimit)); 
            return;
        }
        else if(totalExpenses > event.target.value)
        {
            alert("You cannot reduce budget value lower than the spending"); 
            return;
        } 
        
    }
    return (
<div className='alert alert-secondary' style ={{width: "300px"}}>
<span>Budget:{currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
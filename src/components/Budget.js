import React, { useContext, useState } from 'react';
import { AppContext, AppReducer } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [upperLimit, setupperLimit] = useState(20000);
    const { dispatch } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        
        if(event.target.value  < upperLimit)
        {
            //setNewBudget(event.target.value);
            dispatch({type :'SET_BUDGET',payload: 2100,});
            
        }      
        else
        {
            alert("Value cant exceed "+String(upperLimit)); 
            return;
        } 
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={budget.value} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [upperLimit, setupperLimit] = useState(20000);
    const handleBudgetChange = (event) => {
        if(newBudget  < upperLimit)
        {
            setNewBudget(event.target.value);
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
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
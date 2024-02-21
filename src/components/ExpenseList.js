import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const expenseListStyle=
    {
        width:"80vw",
        justifyContent:"left"
 
    }
    return (
        <header> 
            <h3 fontSize="16px">Allocation</h3>
            <p>
            <table className='table' style = {expenseListStyle} title="auto">
                <title>Monthly savings</title>
                <thead className="thead-light">
                <tr>
                <th scope="col">Department</th>
                <th scope="col">Allocated Budget</th>
                <th scope="col">Increase by 10</th>
                <th scope="col">Decrease by 10</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
                <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                ))}
                </tbody>
            </table>
            </p>
        </header>
  
    );
};

export default ExpenseList;
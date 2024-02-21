import React, { useContext } from 'react';
import { TiDelete, TiPlus } from 'react-icons/ti';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const {currency} =useContext(AppContext);
    const increaseButtonStyle=
    {
        fontSize: "24px",
        fontWeight:"bold",
        color:"green",
        float: "center",
        marginLeft:"5em"
       /*  backgroundColor: "#04AA6D",
        color: "white",
        textAlign: "middle",
        fontSize: "24px",
        fontWeight:"bold",
        borderRound:"50%" */
        
    }
    const decreaseButtonStyle=
    {
        
        fontSize: "24px",
        fontWeight:"bold",
        color:"red",
        float: "center",
        marginLeft:"5em"
        
    }
   
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle  style={increaseButtonStyle}   onClick={event=> increaseAllocation(props.name)}></FaPlusCircle ></td>
        <td><FaMinusCircle  style={decreaseButtonStyle} onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle ></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>

        </tr>
    );
};
export default ExpenseItem;
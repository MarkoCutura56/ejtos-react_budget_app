import React, { useContext, useState } from 'react';
import { AppContext, AppReducer } from '../context/AppContext';

const CurrencyChange = () =>
{
    const currencyOptions = ['$ Dollar','£ Pound','€ Euro','₹ Ruppee']
    const currencyOptionsDefault = ['$ Dollar','£ Pound','€ Euro','₹ Ruppee']
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const handleCurrencyChange = (event) =>
    {
        dispatch({type :'CHG_CURRENCY',payload: event.target.value,});
        
        console.log("in currencychange");
        for(let i = 0; i < currencyOptions.length; i++)
        {
            let usedElement = document.getElementbyID("inputGroupSelect01").selectedIndex;
            if(i==usedElement)
            {
                currencyOptions[i]= "Currency:"+currencyOptions[i];  
            }
            else
            {
                currencyOptions[i]=currencyOptionsDefault[i]+"def";
            }
        }
        
    }
    return(
    
       <div className="input-group mb-3">
        <label for="inputGroupSelect01">{currency}</label>
       <select className="custom-select" id="inputGroupSelect01" onChange={handleCurrencyChange}>
                <option defaultValue>{currency}</option>
                <option value={currencyOptions[0]} name={currencyOptions[0]}>{currencyOptions[0]}</option>
                <option value={currencyOptions[1] } name={currencyOptions[1]} selected>{currencyOptions[1]} </option>
                <option value={currencyOptions[2]} name={currencyOptions[2]}>{currencyOptions[2]} </option>
                <option value={currencyOptions[3]} name={currencyOptions[3]}>{currencyOptions[3]}</option>
                  </select>
       </div>
    );
    
};
export default CurrencyChange;
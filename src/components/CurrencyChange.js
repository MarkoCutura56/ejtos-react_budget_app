import React, { useContext, useState } from 'react';
import { AppContext, AppReducer } from '../context/AppContext';

const CurrencyChange = () =>
{
    const currencyOptions = ['$ Dollar','£ Pound','€ Euro','₹ Ruppee']
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const handleCurrencyChange = (event) =>
    {
        dispatch({type :'CHG_CURRENCY',payload: event.target.value,});
    }
    return(
    {
        <div className='dropdown'>
            
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                <span class="caret"></span></button>
                <ul class="dropdown-menu">
                <li>currencyOptions[1]</li>
                <li>currencyOptions[2]</li>
                <li>currencyOptions[3]</li>
                <li>currencyOptions[4]</li>
        </ul>
        </div>;
    });
    
};
export default CurrencyChange;
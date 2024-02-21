import React, { useContext, useState } from 'react';
import { AppContext, AppReducer } from '../context/AppContext';
import styles from './Currencystyle.module.css';
const CurrencyChange = () =>
{
    const currencyOptionsShort = ['$','£','€','₹']
    const currencyOptions = ['$ Dollar','£ Pound','€ Euro','₹ Ruppee']
    var currencyOptionsMod = ['$ Dollar','£ Pound','€ Euro','₹ Ruppee']
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    
    
    const currencyStyle=
    {
        width : "100x",
        color : "black",
        float :"right",
        backgroundColor :  "Aquamarine",
        padding :  "10x",
        //border :  "1px solid",
        borderRadius :  "5px" 
    }
    const currencyStyleleft=
    {
        
        color : "black",
        float :"left",
        width : "10%",
        backgroundColor :  "Aquamarine",
        //padding :  "10x",
        //border :  "1px solid",
        //borderRadius :  "5px" 
    }
    const currencyStyleright=
    {
       
        color : "black",
        float :"right",
        width : "90%",
        backgroundColor :  "Aquamarine",
        //padding :  "10x",
        //border :  "1px solid",
        //borderRadius :  "5px" 
    }
    
    const handleCurrencyChange = (event) =>
    {
        dispatch({type :'CHG_CURRENCY',payload: event.target.value,});
        
        console.log("in currencychange");
 /*        for(let i = 0; i < currencyOptions.length; i++)
        {
            let usedElement = document.getElementbyID("inputGroupSelect012").selectedIndex;
            if(i==usedElement)
            {
                currencyOptionsMod[i]= "Currency:"+currencyOptions[i];  
            }
            else
            {
                currencyOptionsMod[i]=currencyOptions[i]+"def";
            }
        } */
    }
    return(
    
       <div style={currencyStyle}>
       <label style={currencyStyle} for="inputGroupSelect012" >{currency}</label>
       <select style={currencyStyle} id="inputGroupSelect012" onChange={handleCurrencyChange}>

                <option style={currencyStyleright} value={currencyOptionsShort[0]} name={currencyOptions[0]}>{currencyOptions[0]}</option>
                <option style={currencyStyleright} value={currencyOptionsShort[1] } name={currencyOptions[1]} selected>{currencyOptions[1]} </option>
                <option style={currencyStyleright} value={currencyOptionsShort[2]} name={currencyOptions[2]}>{currencyOptions[2]} </option>
                <option style={currencyStyleright} value={currencyOptionsShort[3]} name={currencyOptions[3]}>{currencyOptions[3]}</option>
                  </select>
       </div>
    );
    
};
export default CurrencyChange;
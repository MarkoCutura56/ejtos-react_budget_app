import React, { useContext, useState } from 'react';
import { AppContext, AppReducer } from '../context/AppContext';
import styles from './Currencystyle.module.css';
const CurrencyChange = () =>
{
    const currencyOptions = ['$ Dollar','£ Pound','€ Euro','₹ Ruppee']
    var currencyOptionsMod = ['$ Dollar','£ Pound','€ Euro','₹ Ruppee']
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    
    
    const currencyStyle=
    {
        width : "300px",
        color : "black",
        
        backgroundColor :  "Aquamarine",
        padding :  "10x",
        //border :  "1px solid",
        borderRadius :  "5px" 
    }
    const currencyStyleleft=
    {
        
        color : "black",
        float :"left",
        width : "40%",
        backgroundColor :  "Aquamarine",
        //padding :  "10x",
        //border :  "1px solid",
        //borderRadius :  "5px" 
    }
    const currencyStyleright=
    {
       
        color : "black",
        float :"right",
        width : "60%",
        backgroundColor :  "Aquamarine",
        //padding :  "10x",
        //border :  "1px solid",
        //borderRadius :  "5px" 
    }
    const currencyStyleselected=
    {
       
        color : "black",
        position: "absolute",
        left:"0",
        right:"0",
        width : "300px",
        backgroundColor :  "Aquamarine",
        //padding :  "10x",
        //border :  "1px solid",
        //borderRadius :  "5px" 
    }
    const handleCurrencyChange = (event) =>
    {
        dispatch({type :'CHG_CURRENCY',payload: event.target.value,});
        
        console.log("in currencychange");
        for(let i = 0; i < currencyOptions.length; i++)
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
        }
    }
    return(
    
       <div style={currencyStyle}>
       <label style={currencyStyleleft} for="inputGroupSelect012" >Currency:  </label>
       <select style={currencyStyleright} id="inputGroupSelect012" onChange={handleCurrencyChange}>
                
                <option style={currencyStyleselected} defaultValue>{currency+"car"}</option>
                <option style={currencyStyleselected} value={currencyOptions[0]} name={currencyOptions[0]}>{currencyOptions[0]}</option>
                <option style={currencyStyleselected} value={currencyOptions[1] } name={currencyOptions[1]} selected>{currencyOptions[1]} </option>
                <option style={currencyStyleselected} value={currencyOptions[2]} name={currencyOptions[2]}>{currencyOptions[2]} </option>
                <option style={currencyStyleselected} value={currencyOptions[3]} name={currencyOptions[3]}>{currencyOptions[3]}</option>
                  </select>
       </div>
    );
    
};
export default CurrencyChange;
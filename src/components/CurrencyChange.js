import React, { useContext, useState } from 'react';
import { AppContext, AppReducer } from '../context/AppContext';
const CurrencyChange = () =>
{
    const currencyOptionsShort = ['$','£','€','₹']
    const currencyOptions = ['$ Dollar','£ Pound','€ Euro','₹ Ruppee']
    const [currencyOptionsMod, setcurrencyOptionsMod] = useState({a:'$ Dollar',b:'£ Pound',c:'€ Euro',d:'₹ Ruppee'});
    
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

    const handleCurrencyChange = (event) =>
    {
        
       if(event.target.value==currencyOptionsShort[0])
       {
        setcurrencyOptionsMod({a:"Currency: "+currencyOptions[0],b:currencyOptions[1],c:currencyOptions[2],d:currencyOptions[0]})
       }
       else if(event.target.value==currencyOptionsShort[1])
       {
        setcurrencyOptionsMod({a:currencyOptions[0],b:"Currency: "+currencyOptions[1],c:currencyOptions[2],d:currencyOptions[0]})
       }
       else if(event.target.value==currencyOptionsShort[2])
       {
        setcurrencyOptionsMod({a:"Currency: "+currencyOptions[0],b:currencyOptions[1],c:"Currency: "+currencyOptions[2],d:currencyOptions[0]})
       }
       else if(event.target.value==currencyOptionsShort[3])
       {
        setcurrencyOptionsMod({a:"Currency: "+currencyOptions[0],b:currencyOptions[1],c:currencyOptions[2],d:"Currency: "+currencyOptions[0]})
       }

        dispatch({type :'CHG_CURRENCY',payload: event.target.value,});
    }
    return(
       <div style={currencyStyle}>
       <label style={currencyStyle} for="inputGroupSelect012" >{currency}</label>
       <select style={currencyStyle} id="inputGroupSelect012" onChange={handleCurrencyChange}>

                <option  value={currencyOptionsShort[0]} name={currencyOptions[0]}>{currencyOptionsMod.a}</option>
                <option  value={currencyOptionsShort[1] } name={currencyOptions[1]} selected>{currencyOptionsMod.b} </option>
                <option  value={currencyOptionsShort[2]} name={currencyOptions[2]}>{currencyOptionsMod.c} </option>
                <option  value={currencyOptionsShort[3]} name={currencyOptions[3]}>{currencyOptionsMod.d}</option>
                  </select>
       </div>
    );
    
};
export default CurrencyChange;
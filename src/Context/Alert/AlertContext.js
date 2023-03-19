import {createContext,useReducer } from "react";
import alertReducer from "./AlertReducer";
const AlertContext=createContext();
export const AlertProvider=({children})=>{
    const initialState=null;
    const [state,dispatch]=useReducer(alertReducer,initialState);
    const SetAlert=(msg,type)=>{
        dispatch({
            type:'SET-ALERT',
            payload:{msg,type}

        })
        setTimeout(()=>dispatch({
            type:'RESET-ALERT'
        }),4000)
    }

    return (<AlertContext.Provider value={{alert:state,SetAlert}}>
            {children}
        </AlertContext.Provider>)
}
export default AlertContext;
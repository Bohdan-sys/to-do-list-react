import React, { createContext } from "react";
import { useLocalStorageState } from '../utils/LocalStorageState'



export const LocalStorageContext = createContext();

export const LocalStorageContextProvider = ({ children }) => {

    const [history, setHistory] = useLocalStorageState('to-do-list', [])

    return (
        <LocalStorageContext.Provider value={{
            history, historySetter: setHistory
        }}>
            {children}
        </LocalStorageContext.Provider>
    )
}

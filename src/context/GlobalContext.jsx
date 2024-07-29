import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [apiKey, setApiKey] = useState("");

    return (
        <GlobalContext.Provider value={{apiKey, setApiKey}}>
            {children}
        </GlobalContext.Provider>
    )
}
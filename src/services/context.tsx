import { createContext, ReactNode, useState } from "react";

interface AppContextProps{
    token: string|undefined
    userName: string|undefined
    portalLogo: string|undefined
    setToken: any //SetStateAction
    setUserName: any //SetStateAction
    setPortalLogo: any //SetStateAction
}

interface AppContextProviderProps{
    children: ReactNode
}

export const AppContext = createContext({} as AppContextProps)

export function AppContextProvider({ children }:AppContextProviderProps){
    const [token, setToken] = useState<string>()
    const [userName, setUserName] = useState<string>()
    const [portalLogo, setPortalLogo] = useState<string>()
    
    return(
        <AppContext.Provider value={{
            token,
            userName,
            portalLogo,
            setToken,
            setUserName,
            setPortalLogo
        }}>
            {children}
        </AppContext.Provider>
    )

}
import { createContext, ReactNode, useState } from "react";

interface AppContextProps{
    token: string|undefined
    userName: string|undefined
    userId: string|undefined
    portalLogo: string|undefined
    setToken: any //SetStateAction
    setUserName: any //SetStateAction
    setUserId: any //SetStateAction
    setPortalLogo: any //SetStateAction
}

interface AppContextProviderProps{
    children: ReactNode
}

export const AppContext = createContext({} as AppContextProps)

export function AppContextProvider({ children }:AppContextProviderProps){
    const [token, setToken] = useState<string>()
    const [userName, setUserName] = useState<string>()
    const [userId, setUserId] = useState<string>()
    const [portalLogo, setPortalLogo] = useState<string>()
    
    return(
        <AppContext.Provider value={{
            token,
            userName,
            userId,
            portalLogo,
            setToken,
            setUserName,
            setUserId,
            setPortalLogo
        }}>
            {children}
        </AppContext.Provider>
    )

}
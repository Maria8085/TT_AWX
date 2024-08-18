import {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState} from "react";

export type Credentials = { serial: string, token: string }
export const AuthContext = createContext<Partial<{
    credentials: Credentials,
    setCredentials: Dispatch<SetStateAction<Credentials>>
}>>({})

export function AuthContextProvider({children}: PropsWithChildren) {
    const [credentials, setCredentials] = useState<Credentials>({token: '', serial: ''})
    return <AuthContext.Provider
        value={{credentials, setCredentials}}>
        {children}
    </AuthContext.Provider>
}

export function useAuth(){
    const {credentials, setCredentials} = useContext(AuthContext)
    return {credentials, setCredentials}
}
import { useState,createContext,useEffect } from "react";

// =======================================================================
// 2. Authentication Context
// =======================================================================

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem('token'||null))

    const signin=(newToken)=>{
        setToken(newToken)
        localStorage.setItem('token',newToken)
    }

    const signout=()=>{
        setToken(null)
        localStorage.removeItem('token')
    }

    return(
        <AuthContext.Provider value={{token,signin,signout}}>
            {children}
        </AuthContext.Provider>
    )
}



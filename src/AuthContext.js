import { useState,createContext,useEffect } from "react";

// =======================================================================
// 1. API Configuration & Utilities
// =======================================================================

// !!! IMPORTANT: Replace this URL with your actual Node.js backend URL.
const API_URL = 'http://localhost:3100';
const api = {
  get: async (endpoint, token) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  },
  post: async (endpoint, data) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  },
  authenticatedRequest: async (method, endpoint, token, data = null) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: data ? JSON.stringify(data) : null,
    };
    const response = await fetch(`${API_URL}/${endpoint}`, options);
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  }
};

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



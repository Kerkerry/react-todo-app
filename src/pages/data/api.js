// =======================================================================
// 1. API Configuration & Utilities
// =======================================================================

// !!! IMPORTANT: Replace this URL with your actual Node.js backend URL.
export const API_URL = 'http://localhost:3100';
export const api = {
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

  post: async (endpoint, data,token) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  },

  put:async(endpoint,data,token)=>{    
    const response=await fetch(
      `${API_URL}/${endpoint}`,
      {
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(data)
      }
    );
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  },

  delete:async(endpoint,token)=>{
    const response=await fetch(
      `${API_URL}/${endpoint}`,
      {
      method:"DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }
    )
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  },

};
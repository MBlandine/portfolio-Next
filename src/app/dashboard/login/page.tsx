'use client'
import React, { useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import api from "@/lib/api"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  // useEffect(() => {
  //   if ( localStorage.getItem('user-info')){
  //     router.push('/dashboard')
  //   }
  // }, [router]);

  // Add this logout function
  function clearUserInfo() {
    localStorage.removeItem('user-info');
    console.log('User info cleared');
    // Optionally refresh the page to show the login form
    window.location.reload();
  }

  async function login(){
    console.warn(email,password);
    setIsLoading(true);
    try{
    let item = {email,password};
    let result = await api.post("/auth/login", item);

    
    localStorage.setItem('user-info', JSON.stringify(result.data));
    router.push("/dashboard")
  }
    catch (error){
      console.error("Login failed:", error);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      
      {/* Add logout button at the top */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={clearUserInfo} 
          className="btn btn-danger"
          style={{ marginRight: '10px' }}
        >
          Clear Stored Login
        </button>
        <small style={{ color: '#666' }}>
          Click this if you're being redirected automatically
        </small>
      </div>

      <input 
        type="email" 
        placeholder="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}  
        className="form-control"
        disabled={isLoading}
      />
      <br/>
      <input 
        type="password" 
        placeholder="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        className="form-control"
        disabled={isLoading}
      />
      <br/>
      <button 
        onClick={login} 
        className="btn btn-primary"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
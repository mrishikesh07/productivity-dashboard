import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Auth = () => {
    const {login} = useAuth();

  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={login} >Login</button>
    </div>
  )
}

export default Auth;
import React, { useState } from 'react'
import './Login.css'
export const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleLogin = (event) => {
    event.preventDefault()
  }

  const handleUsername = ({ target }) => {
    setUsername(target.value)
  }

  const handlePassword = ({ target }) => {
    setPassword(target.value)
  }

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type='text' value={username} onChange={handleUsername} placeholder='Username' />
        <input type='password' value={password} onChange={handlePassword} placeholder='Password' />
        <button>Login</button>
      </form>
    </div>
  )
}

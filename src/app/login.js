import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage(`Welcome, ${response.data.username}!`)
        sessionStorage.setItem('token', response.data.token)
        localStorage.setItem('token', response.data.token)
        sessionStorage.setItem('name', response.data.username)
        localStorage.setItem('name', response.data.username)
        console.log(sessionStorage)
      }
    } catch (error) {
      setMessage('Invalid username or password. Which one? Good question. And good luck.')
      console.log(sessionStorage)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    console.log("Token removed!")
    window.location.reload()
  }

  if (localStorage.getItem('token')){
    return  (
    <>
    <p>Hi {localStorage.getItem('name')}! You are logged in.</p>
    <button onClick={logout}>Logout</button>
    </>
    )
  } else {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  )
}}

export default Login
import { useState } from 'react'
import axios from 'axios'

const Register = ({ showLogin }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/users', {
        username,
        email,
        password
      })

      if (response.status === 201) {
        console.log('Registered.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 bg-black rounded-md shadow-md md:max-w-xl">
      <h1 className="text-3xl font-bold text-center text-neutral-100">Sign Up</h1>
      <form onSubmit={handleRegister} className="mt-6">
      <div className="mb-4">
          <label
            htmlFor="udername"
            className="block text-sm font-semibold text-neutral-100"
          >
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-neutral-100"
          >
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-neutral-100"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-2">
          <button type='submit' className="w-full px-4 py-2 tracking-wide text-neutral-100 transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Login
          </button>
        </div>
      </form>

      <p className="mt-4 text-sm text-center text-neutral-300">
        Already have an account?{" "}
        <span
          onClick={showLogin}
          className="font-medium text-blue-600 hover:underline"
        >
          Log In
        </span>
      </p>
    </div>
  </div>
  )
}

export default Register

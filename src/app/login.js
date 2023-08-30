import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Login = ({ showRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage(`Welcome, ${response.data.username}!`);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("token", response.data.token);
          localStorage.setItem("token", response.data.token);
          sessionStorage.setItem("name", response.data.username);
          localStorage.setItem("name", response.data.username);
          window.location.reload();
        }
        console.log(sessionStorage);
      }
    } catch (error) {
      setMessage(
        "Invalid username or password. Which one? Good question. And good luck."
      );
      console.log(sessionStorage);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-black rounded-md shadow-md md:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-neutral-100">Login</h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-neutral-100"
            >
              Email
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <p className="mt-4 text-sm text-center text-gray-700 pb-4">{message}</p>
          <div className="mt-2">
            <button type='submit' className="w-full px-4 py-2 tracking-wide text-neutral-100 transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-neutral-300">
          Don't have an account?{" "}
          <span
            onClick={showRegister}
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

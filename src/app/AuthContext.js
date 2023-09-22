'use client'
import { createContext, useState } from 'react';
import {useRouter} from 'next/navigation';
import { Router } from 'next/router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false)
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
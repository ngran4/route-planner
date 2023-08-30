'use client'
import React, { useState, useEffect } from 'react';
import Login from './login';
import Register from './register';

export default function Home() {
  const [activeForm, setActiveForm] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = () => {
    setActiveForm(prevForm => (prevForm === 'login' ? 'signup' : 'login'));
  };

  const handleButtonClick = component => {
    setActiveComponent(component);
  };

  const logout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    console.log("Token removed!");
    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    return (
      <>
        <p>Hi {localStorage.getItem('name')}! You are logged in.</p>
        <button onClick={logout}>Logout</button>
      </>
    );
  } else {
    return (
      <>
        {activeForm === 'login' ? (
          <Login showRegister={toggleForm} />
        ) : (
          <Register showLogin={toggleForm} />
        )}
      </>
    );
  }
}
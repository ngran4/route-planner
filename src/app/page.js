"use client"
import React, {useState} from 'react';
import Login from './login'
import Register from './register'

export default function Home() {
  const [activeForm, setActiveForm] = useState('login');

  const toggleForm = () => {
    setActiveForm(prevForm => (prevForm === 'login' ? 'signup' : 'login'));
  };


  const [activeComponent, setActiveComponent] = useState('login');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };


  const logout = () => {
    if (typeof window !== "undefined") {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    console.log("Token removed!")
    window.location.reload()
    }
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
      <>
          {activeForm === 'login' ? (
      <Login showRegister={toggleForm}/>
    ) : (
      <Register showLogin={toggleForm} />
    )}
      </>
    )
  }
}
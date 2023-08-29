"use client"
import React, {useState} from 'react';
import Login from './login'
import Register from './register'

export default function Home() {

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
      <>
          {currentComp === 'login' ? (
      <Login showRegister={handleToggle}/>
    ) : (
      <Register showLogin={handleToggle} />
    )}
      {/* <Login/>
      <Register/> */}
      </>
    )
  }
}
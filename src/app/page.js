'use client'
import React, { useState, useEffect } from 'react';
import Login from '../../components/Login';
import Register from '../../components/Registeregister';
import Nav from '../../components/Nav';

export default function Home() {
  const [activeForm, setActiveForm] = useState('login');

  const toggleForm = () => {
    setActiveForm(prevForm => (prevForm === 'login' ? 'signup' : 'login'));
  };

  const handleButtonClick = component => {
    setActiveComponent(component);
  };

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
// }
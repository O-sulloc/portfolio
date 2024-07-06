import React, { useState } from 'react';
import { Home, Navbar, Stack, Project, Experience, Contact } from './components/layouts';
import './App.css';

const App = () => {

  return (
    <div className="container">
      <div className='blob-wrapper'>
        <div className='blob'></div>
      </div>
      <Navbar />
      <Home />
      <Stack />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App
import React from 'react';
import './App.css';
import Mynavbar from './Mycomponents/Mynavbar';
import Home from './Mycomponents/Home';
import Project from './Mycomponents/Project'; 
import Contact from './Mycomponents/Contact';   
import { Routes, Route } from 'react-router-dom';
import About from './Mycomponents/About';

function App() {
  return (
    <>
      <Mynavbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
         <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import UiUxPage from './uiuxpage.js';
import Project from './projects.js';
import AboutMe from './aboutme.js';
import React, { useState } from 'react';
import './App.css';


function App() {

  return (
    <BrowserRouter>


      <Routes>

        <Route path="/" element={<Home />}/>
       

        <Route path='/UiUxPage' element={<UiUxPage />}/>

        <Route path='/projects' element={<Project />}/>
        
        <Route path='/AboutMe' element={<AboutMe />}/>


      </Routes>
    </BrowserRouter>




  );
}

export default App;

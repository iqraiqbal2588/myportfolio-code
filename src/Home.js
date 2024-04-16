import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

function Home() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
  
    return (
      
      <div className="App">
        {/* Menu Bar */}
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            backgroundColor: '#333',
            padding: '10px',
            zIndex: '1000',
          }}
        >
  
     
  
          <span
            style={{ color: '#fff', cursor: 'pointer' }}
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <div>
        
            <FaBars style={{ color: 'white',  cursor: 'pointer' }} />
      </div>
          </span>
        
        </div>
  
        {/* Drawer */}
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: isDrawerOpen ? '0' : '-300px', // Set the initial position off-screen
            height: '100%',
            width: '200px',
            backgroundColor: '#555',
            padding: '20px',
            zIndex: '999',
            transition: 'left 0.3s ease-in-out', 
            marginTop: '20px'// Add transition property for left property
          }}
        >
      
  
          {/* Menu items with divider */}
       
          <div style={{ marginTop: '20px' }}>
            <p style={{ color: 'white', cursor: 'pointer', marginBottom: '20px', borderBottom: '2px solid #888' }}>
              Home
            </p>
           
            <Link to ="/Aboutme"> <p style={{ color: 'white', cursor: 'pointer', marginBottom: '10px', borderBottom: '2px solid #888' }}>
  About me 
  </p></Link>
            <Link to ="/projects"> <p style={{ color: 'white', cursor: 'pointer', marginBottom: '10px', borderBottom: '2px solid #888' }}>
  Projects 
  </p></Link>


  <Link to ="/UiUxPage"> <p style={{ color: 'white', cursor: 'pointer', marginBottom: '10px', borderBottom: '2px solid #888' }}>
  UI/UX
  </p></Link>
  
  
            
              
  
  
          </div>
     
         
         
        </div>
  
        {/* Content */}
        <div
          style={{
           
            padding: '20px',
            marginTop: '30px', // Adjust margin to make space for the menu bar
          }}
          className="header"
        >
          {/* Your existing content */}
          <img
            src={process.env.PUBLIC_URL + '/images/iqra3.jpeg'}
            alt="Iqra"
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '50%',
              marginBottom: '20px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              border: '5px solid #fff',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            }}
          />
          <h1 className="name">Iqra Iqbal</h1>
          <h3 className="name">Flutter Developer</h3>
          <p className="description">
            Welcome to my portfolio. I am a Flutter Developer ...
            <p className="description">I build Interactive Mobile applications using Dart technology</p>
          </p>
          
  
        </div>
        <h2 className="name" style={{ color: 'blue' }}>
      Skills and Expertise
    </h2>
    <ul>
      <li>Flutter</li>
      <li>Web Development </li>
      <li>Firebase</li>
      <li>UI/UX</li>
     
    </ul>
    <h2 className="name" style={{ color: 'blue' }}>
     Programming Languages
    </h2>
    <ul>
      <li>Dart</li>
      <li>React js</li>
      <li>html</li>
      <li>Bootstrap</li>
     
    </ul>
    
    <h2 className="name" style={{ color: 'blue' }}>
     Work Experience
    </h2>
    <ul>
      <li>Solution Soul , Lahore </li>
      <ul>
        <li>Flutter developer | UI/UX designer </li>
        <li> Aug 2023- present</li>
      </ul>
     
    </ul>
            
      </div>
  
    
  
    );
    
  }
  
  export default Home;

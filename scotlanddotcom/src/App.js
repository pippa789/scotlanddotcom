// src/App.js
import React from 'react';
import Gallery from './Components/Gallery'; // Import your Gallery component
import './index.css';
import {BrowserRouter as Router, Route, Routes, } from 'react-router'
import Nav from './Components/Nav';
import Home from './Home';
import About from './About';
function App() {
  return (
<Router>
     <Nav/>
    
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/About" element={<About />} />
     <Route path="/Gallery" element={<Gallery />} />
     
     </Routes>
     {/* <Footer/> */}
   </Router>
      
    
    
  );
}

export default App;
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Home button="See my projects"/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        const sections=['Home', 'About', 'Projects', 'Contact'];
    
        return(
        <ul className="nav justify-content-end sticky-top">
  <li className="nav-item">
    <a className="nav-link" href="#home">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#about">AboutMe</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#projects">Projects</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#contact">ContactMe</a>
  </li>
</ul>
    );
}
}
export default Navbar;
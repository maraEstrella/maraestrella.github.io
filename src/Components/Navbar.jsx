import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render(){
    const sections=['Home', 'About', 'Projects', 'Contact'];
      return(
        <div>
          <div className="dropdown toggle">
            <i className="fas fa-bars" id="dropdownMenuButton" data-toggle="dropdown"></i>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#home">Home</a>
                <a className="dropdown-item" href="#about">AboutMe</a>
                <a className="dropdown-item" href="#projects">Projects</a>
                <a className="dropdown-item" href="#contact">ContactMe</a>
              </div>
          </div>
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
        </div>
    );
}
}
export default Navbar;
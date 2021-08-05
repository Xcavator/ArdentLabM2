import React from "react";
// import {Link} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header id="header-cmpnt-container">
        <div id='header-logo' class='header-part'>
          <img src='https://static.wixstatic.com/media/132a22_c124961f91294369b46aeaebf0b2182b~mv2.png/v1/fill/w_375,h_75,al_c,lg_1,q_85/ardent-labs-logo.webp' className="App-logo" alt="logo" />
        </div>
        
        <div class='header-part'>
          <nav id='navi-bar'>
            <div class='navi-item'>
              <Link to='/'><span>Home</span></Link>
            </div>
            <div class='navi-item'>
              <Link to='/software-engineering-remote-interns'><span>Software Engineering Virtual Internship</span></Link>
            </div>
            <div class='navi-item'>
              <Link to='/#mission-cmpnt-container'><span>Mission</span>
              </Link>
            </div>
            <div class='navi-item'>
              <Link to='/#about-cmpnt-container'>
                <span>About</span>
              </Link>
            </div>
            <div class='navi-item'>
              <Link to='/#portfolio-cmpnt-container'>
                <span>Portfolio</span>
              </Link>
            </div>
            <div class='navi-item'>
              <span>More...</span>
              <Submenu />
            </div>

          </nav>
        </div>
      </header>
    );
  }
};


class Submenu extends React.Component {
  render() {
    return (
      <ul id="nav-submenu">
          <div class='navi-item submenu-item'>
            <Link to='/#internships-cmpnt-container'>
              <span>Internships</span>
            </Link>
          </div>
          <div class='navi-item submenu-item'>
            <Link to='/#contact-cmpnt-container'>
              <span>Contact</span>
            </Link>
          </div>
      </ul>
    )
  }
}

export default Header;

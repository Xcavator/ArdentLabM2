import React from "react";
// import {Link} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header id="header-cmpnt-container">
        <div id='header-logo'>
          <img src='https://static.wixstatic.com/media/132a22_c124961f91294369b46aeaebf0b2182b~mv2.png/v1/fill/w_375,h_75,al_c,lg_1,q_85/ardent-labs-logo.webp' className="App-logo" alt="logo" />
        </div>
        
        <div>
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
            <Link to='/Mission'>
              <span>About</span>
              </Link>
            </div>
            <div class='navi-item'>
              <span>Portfolio</span>
            </div>
            <div class='navi-item'>
              <span>More...</span>
            </div>

          </nav>
        </div>
      </header>
    );
  }
};

export default Header;

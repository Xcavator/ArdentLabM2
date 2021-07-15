import React from "react";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <img src='https://static.wixstatic.com/media/132a22_c124961f91294369b46aeaebf0b2182b~mv2.png/v1/fill/w_375,h_75,al_c,lg_1,q_85/ardent-labs-logo.webp' className="App-logo" alt="logo" />
        </div>
        <div id='navi-bar'>
          <div class='navi-item'>
            <span>Home</span>
          </div>
          <div class='navi-item'>
            <span>Software Engineering Virtual Internship</span>
          </div>
          <div class='navi-item'>
            <span>Mission</span>
          </div>
          <div class='navi-item'>
            <span>About</span>
          </div>
          <div class='navi-item'>
            <span>Portfolio</span>
          </div>
          <div class='navi-item'>
            <span>More...</span>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;

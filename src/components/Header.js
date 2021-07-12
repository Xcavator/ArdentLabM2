import React from "react";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src='https://static.wixstatic.com/media/132a22_c124961f91294369b46aeaebf0b2182b~mv2.png/v1/fill/w_375,h_75,al_c,lg_1,q_85/ardent-labs-logo.webp' className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
};

export default Header;



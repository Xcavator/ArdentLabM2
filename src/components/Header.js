import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header id="header-cmpnt-container">
        <div id='header-logo'>
          <img src='https://static.wixstatic.com/media/132a22_c124961f91294369b46aeaebf0b2182b~mv2.png/v1/fill/w_375,h_75,al_c,lg_1,q_85/ardent-labs-logo.webp' className="App-logo" alt="logo" />
        </div>
        <div id='navi-bar'>
          <div class='navi-item'>
            <Link to='/'><span>Home</span></Link>
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
          <Switch>
            <Route exact path="/">
              <App />
            </Route>

          </Route>
        </Switch>
        </div>
      </header>
    );
  }
};

export default Header;

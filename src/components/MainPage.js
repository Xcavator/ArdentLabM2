import React from "react";
import "./MainPage.css";

import Header from "./Header";
import Mission from "./Mission";
import About from "./About";
import Portfolio from "./Portfolio";
import Internships from "./Internships";
import Contact from "./Contact";
import Footer from "./Footer";

class MainPage extends React.Component {
  render() {
    return (
      <div id='mainpage-container'>
      <Header />
      <div>
        <p>
          <span>This is main page</span>
        </p>
      </div>
      <Mission />
      <About />
      <Portfolio />
      <div id="internships-container">
        <Internships />
        <Contact />
        <Footer />
      </div>
      </div>
    );
  }
};

export default MainPage;
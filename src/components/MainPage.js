import React from "react";
import "./MainPage.css";

import Header from "./Header";
import Mission from "./Mission";
import About from "./About";
import Portfolio from "./Portfolio";
import Internships from "./Internships";
import Contact from "./Contact";

class MainPage extends React.Component {
  render() {
    return (
      <>
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
      </div>
      </>

    );
  }
};

export default MainPage;
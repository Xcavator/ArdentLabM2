import React from "react";
import "./MainPage.css";


import Mission from "./Mission";
import About from "./About";
import Portfolio from "./Portfolio";
import Internships from "./Internships";
import Contact from "./Contact";
import Banner from "./Banner";
import VerticalNav from "./VerticalNav";

class MainPage extends React.Component {
  render() {
    return (
      <div id='mainpage-cmpnt-container'>
        <VerticalNav />
        <Banner />
        <Mission />
        <About />
        <Portfolio />
        <div id="internships-container">
          <Internships />
          <Contact />
        </div>
      </div>
    );
  }
};

export default MainPage;
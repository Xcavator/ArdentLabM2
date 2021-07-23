import React from "react";
import "./MainPage.css";

import Header from "./Header";
import Mission from "./Mission";
import About from "./About";
import Portfolio from "./Portfolio";
import Internships from "./Internships";
import Contact from "./Contact";
import Footer from "./Footer";
import BGVideo from "./BGVideo";
import Banner from "./Banner";

class MainPage extends React.Component {
  render() {
    return (
      <div id='mainpage-cmpnt-container'>
        <BGVideo />
        <Header />
        <Banner />
        <div>
          <p>
            <span>Need pic slide show</span>
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
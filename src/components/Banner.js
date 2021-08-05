import React from "react";
import "./Banner.css";

import {Link} from "react-router-dom";
import CarouselCmpnt from "./CarouselCmpnt";

class Banner extends React.Component {
  render() {
    return (
        <div id="banner-cmpnt-container">
          <div class='banner'>
            <p>Looking for an internship? <Link to='/software-engineering-remote-interns'><span>Check out our Software Engineering Virtual Internship!</span></Link>
            </p>
          </div>
          <div class='banner'>
            <div class='banner-col' id='banner-text-container'>
              <div class='banner-text'>Next</div>
              <div class='banner-text'>Generation</div>
              <div class='banner-text'>Learning</div>
            </div>
            <div class='banner-col' id='pic-slide'>
              <CarouselCmpnt />
            </div>
          </div>
        </div>
    );
  }
};

export default Banner;
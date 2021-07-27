import React from "react";
import "./Banner.css";

import {Link} from "react-router-dom";

class Banner extends React.Component {
  render() {
    return (
        <div id="Banner-cmpnt-container">
          <div class='banner'>
            <p>Looking for an internship? <Link to='/software-engineering-remote-interns'><span>Check out our Software Engineering Virtual Internship!</span></Link>
            </p>
          </div>
          <div class='banner'>
            <div class='banner-col'>
              <p>Next</p>
              <p>Generation</p>
              <p>Learning</p>
            </div>
            <div class='banner-col' id='pic-slide'>
            </div>
          </div>
        </div>
    );
  }
};

export default Banner;
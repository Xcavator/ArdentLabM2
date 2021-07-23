import React from "react";
import "./Banner.css";

class Banner extends React.Component {
  render() {
    return (
        <div id="Banner-cmpnt-container">
          <div class='banner'>
            <p>Looking for an internship? <a href="https://www.google.com">Check out our Software Engineering Virtual Internship!</a>
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
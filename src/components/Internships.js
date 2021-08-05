import React from "react";
import "./Internships.css";

class Internships extends React.Component {
  render() {
    return (
      <div id='internships-cmpnt-container'>
      <div id='internships-title'>
        <p>
          <span>Internships</span>
        </p>
      </div>

      <div>
        <div class='job-position'>
          <div class='job-title'>
            <p>Software Engineer</p>
          </div>
          <div class='job-description'>
            <p>Learn the agile development process, master the latest front and back-end development tools, and take charge of an app from conception to production.</p>
          </div>
        </div>
        
        <div class='job-position'>
          <div class='job-title'>
            <p>UI/UX/Product Manager</p>
          </div>
          <div class='job-description'>
            <p>Learn how to develop beautiful user interface and meaningful user experience and jump start your career in product management.</p>
          </div>
        </div>
        
        <div class='job-position'>
          <div class='job-title'>
            <p>Digital Marketer</p>
          </div>
          <div class='job-description'>
            <p>Learn how to market software applications via online and offline marketing media with a special emphasis on social media marketing.</p>
          </div>
        </div>

      </div>
      </div>
    );
  }
};

export default Internships;
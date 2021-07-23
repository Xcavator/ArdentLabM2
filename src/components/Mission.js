import React from "react";
import "./Mission.css";

class Mission extends React.Component {
  render() {
    return (
      <div id='mission-cmpnt-container'>
        <div>
          <p>
            <span>Mission</span>
          </p>
        </div>
        <div id='mission-list-container'>
          <div class='mission-item-container'>
            <div class='mission-item-num'>
              <span>01</span>
            </div>
            <div class='mission-item-breakline'>
            </div>
            <div class='mission-item-content'>
              <p class='mission-content-title'>BUILD</p>
              <p class='mission-content-text'>We develop apps and solutions to create better learning, teaching, and parenting experiences. We adopt the best industrial practices in software development, latest techniques in AI, and research-validated learning design principles to achieve maximum results.</p>
            </div>
          </div>
          <div class='mission-item-container'>
            <div class='mission-item-num'>
              <span>02</span>
            </div>
            <div class='mission-item-breakline'>
            </div>
            <div class='mission-item-content'>
              <p class='mission-content-title'>TRAIN</p>
              <p class='mission-content-text'>We provide real-world, hands-on, and project-based training to high school and college students who are interested in developing apps, conducting scientific research using computing methods,  becoming entrepreneurs, or gain work experience in the tech industry.</p>
            </div>
          </div>
          <div class='mission-item-container'>
            <div class='mission-item-num'>
              <span>03</span>
            </div>
            <div class='mission-item-breakline'>
            </div>
            <div class='mission-item-content'>
              <p class='mission-content-title'>INCUBATE</p>
              <p class='mission-content-text'>We provide internships and incubation to entrepreneurs who would like to start their own company or social ventures. Our network of advisers will help young entrepreneurs turn their ideas into winning business plan competitions, prototypes, and investment pitches. </p>
            </div>
          </div>
        </div>
        <div id='mission-video-container'>
          <video preload="none" autoplay="" playsinline="true" src="https://video.wixstatic.com/video/132a22_f8c893ecc2c74984901b0213b6073de0/240p/mp4/file.mp4"></video>
        </div>
      </div>
    );
  }
};

export default Mission;
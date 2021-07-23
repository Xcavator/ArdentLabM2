import React from "react";
import "./BGVideo.css";

class BGVideo extends React.Component {
  render() {
    return (
        <div id="BGVideo-cmpnt-container">
          <video id='background-video' src='https://video.wixstatic.com/video/11062b_35e9c1a919df41df8b95c20340739349/1080p/mp4/file.mp4' autoPlay loop muted>Browser does not support the video tag</video>
        </div>
    );
  }
};

export default BGVideo;
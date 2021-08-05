import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div id='about-cmpnt-container'>
        <div id='about-title'>
          <p>
            <span>WHO WE ARE</span>
          </p>
        </div>
        <div id='about-list-container'>
          <div id='about-story' class='about-item-container'>
            <div id='story-logo' class='about-item-logo'>
              <img src='story.svg' alt='story-logo-alt'/>
            </div>
            <div id='story-content' class='about-item-content'>
              <span class='item-content-headline'>OUR STORY</span>
              <p class='item-content-text'>Ardent Labs' team of entrepreneurs develop business ideas in learning science and technology. The minimum viable product (MVP) of these ideas are quickly developed and tested to get feedback and market validation. Successful MVPs will receive seed funding to fully develop the app. The most promising ones get spun-off as independent companies by the lead entrepreneur(s) from the lab upon receiving venture funding.</p>
            </div>
          </div>
          <div id='about-vision' class='about-item-container'>
            <div id='vision-logo' class='about-item-logo'>
              <img src='vision.svg' alt='vision-logo-alt'/>
            </div>
            <div id='vision-content' class='about-item-content'>
              <span class='item-content-headline'>OUR VISION</span>
              <p class='item-content-text'>Artificial Intelligence and 5G Networks are disruptive technologies that will lead to highly interactive and personalized learning experiences for students, more effective learning management tools for teachers, and holistic evaluation of student performance for parents. We invest in companies, incubate start-ups, and develop software and solutions that meet the needs of next generation learning.</p>
            </div>
          </div>
          <div id='about-technology' class='about-item-container'>
            <div id='technology-logo' class='about-item-logo'>
              <img src='technology.svg' alt='technology-logo-alt'/>
            </div>
            <div id='technology-content' class='about-item-content'>
              <span class='item-content-headline'>Technology</span>
              <p class='item-content-text'>We develop technology that use big data and artificial intelligence to analyze student learning behavior. We design student profiles based on learning behavior, education environment, and parenting habits to determine which subject is the easiest to learn for the student, what should be the focus of instructors in either classroom or one-on-one sessions, and intelligent recommendations for parents to engage and encourage their child’s learning journey.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
import React from "react";
// import "./Contact.css";

import Header from "./Header";
import Footer from "./Footer";
import BGVideo from "./BGVideo";

class SWRIntern extends React.Component {
  submitHandler(){
    console.log('submit clicked');
  }
  render() {
    return (
      <div id='internship-page-container'>
        <BGVideo />
        <Header />
        <div id='internship-intro'>
          <h1>SOFTWARE ENGINEERING VIRTUAL INTERNSHIP</h1>
          <p>As many internships have been suspended, or even cancelled, Ardent Labs aims to continue bringing quality internship programs to everyone at home during the crisis. During our 8-10 weeks virtual spring internship, interns will have the opportunity to learn modern web development tools by working on multiple milestone projects. </p>
        </div>
        <div class='page-seperate-line'></div>
        <div id='intern-introduction-container'>
          <div class='intern-intro-item'>
            <div class='intro-title'>
              <div class='intro-logo'>
              </div>
              <h2>Why should you intern at Ardent Labs?</h2> 
            </div>
            <div class='intro-content'>
              <p>Our mission is to provide interns the support and resources needed to develop both professional and technical skills that will jump-start their career. Our last cohort of interns were accepted into major companies such as Google, Amazon, Walmart, Siemens, and Cerner Corporation.</p>
              <br />
              <p>As an Ardent Labs intern, every task given to you is never trivial, makes an impact, and most importantly, helps you learn something new and improve upon your current skills. You will also have the rare opportunity to gain mentorship from our lead software engineers, who will guide you through industry-standard software development practices.</p>
            </div>
          </div>

          <div class='intern-intro-item'>
            <div class='intro-title'>
              <div class='intro-logo'>
              </div>
              <h2>What will you learn?</h2> 
            </div>
            <div class='intro-content'>
              <p>This internship provides aspiring software engineers the opportunity to learn modern web development tools such as HTML/CSS, JavaScript, React/React Native, GraphQL, and version control through Git.</p>
            </div>
          </div>

          <div class='intern-intro-item'>
            <div class='intro-title'>
              <div class='intro-logo'>
              </div>
              <h2>What will you do?</h2> 
            </div>
            <div class='intro-content'>
              <p>During the 8-10 weeks internship, interns will work on learning the tools used by our products through completing milestone projects. There will be four milestone projects to work on throughout the program that interns can complete at their own pace.</p>
              <br />
              <p>Interns will be required to work at least 10 hours per week to make sufficient progress on these projects.</p>
            </div>
          </div>

          <div class='intern-intro-item'>
            <div class='intro-title'>
              <div class='intro-logo'>
              </div>
              <h2>When does the program end?</h2> 
            </div>
            <div class='intro-content'>
              <p>This virtual internship takes place during the duration of UCI's spring quarter. The internship will end on June 5th, and interns who are interested in the summer internship will need to send in another application around May 10th. To learn more about about our summer internships, click here.</p>
            </div>
          </div>

          <div class='intern-intro-item'>
            <div class='intro-title'>
              <div class='intro-logo'>
              </div>
              <h2>Meet the Mentors</h2> 
            </div>
            <div class='intro-content'>
              <p>Meet our lead software engineers, who have been offered full time jobs and internships from renowned tech companies such as Amazon and Western Digital:</p>
            </div>
          </div>

          <div id='mentor-list'>
            <div class='mentor-profile'>
              <div class='profile-picture'>
                <img src='https://cdn.vox-cdn.com/thumbor/SnEPfFoamf_20liNFDWyBVxzEHk=/0x0:939x704/920x613/filters:focal(0x0:939x704):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49610677/homersimpson.0.0.jpg' alt='Homer'/>
              </div>
              <div class='profile-intro'>
                <p class='profile-name'>Homer</p>
                <p class='ardent-title'>Software Engineer at Ardent Labs</p>
                <p class='job-offer'>Full time job offer at Western Digital</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class='page-seperate-line'></div>

        <div id='program-intro'>
          <div>
            <p>YEAR-ROUND INTERNSHIP PROGRAM</p>
          </div>
          <div>
            <p>Interested in developing a career in leading tech companies? Consider participating in our summer internship, which is a part of our comprehensive year-round internship program! This program consists of three stages where each stage drives interns towards ultimately creating an MVP (Minimum Viable Product) and taking charge of their product vision from start to finish.</p>
          </div>
          <div>
            <a href='https://ead60fcc-40f3-4b04-9c66-485499008c9a.filesusr.com/ugd/132a22_10acddd2d98747ed97eae09cef4f048e.pdf'>LEARN MORE ABOUT OUR PROGRAM HERE</a>
          </div>
          <div>
            <p>If you are interested in applying, please send your resume and transcript to info@ardentlabs.io.</p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
};

export default SWRIntern;
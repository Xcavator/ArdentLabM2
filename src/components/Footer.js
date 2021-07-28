import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

class Footer extends React.Component {
  render() {
    return (
        <div id="footer-cmpnt-container">
          <div id='footer-logo' class='footer-col'>
            <img src="https://static.wixstatic.com/media/132a22_c124961f91294369b46aeaebf0b2182b~mv2.png/v1/fill/w_263,h_54,al_c,q_85,usm_0.66_1.00_0.01/ardent-labs-logo.webp" alt="ardent-labs-logo.png" />
          </div>

          <div id='footer-links' class='footer-col'>
            <p>QUICK LINKS</p>
            <div id='link-list'>              
              <div class='link-item'>
                <Link to='/'><span>Home</span></Link>
              </div>
              <div class='link-item'>
                <Link to='/software-engineering-remote-interns'><span>Software Engineering Virtual Internship</span></Link>
              </div>
              <div class='link-item'>
                <Link to='/#mission-cmpnt-container'><span>Mission</span>
                </Link>
              </div>
              <div class='link-item'>
                <Link to='/#about-cmpnt-container'><span>About</span>
                </Link>
              </div>
              <div class='link-item'>
                <Link to='/#portfolio-cmpnt-container'><span>Portfolio</span>
                </Link>
              </div>
              <div class='link-item'>
                <Link to='/#internship-cmpnt-container'><span>Internship</span>
                </Link>
              </div>  
              <div class='link-item'>
                <Link to='/#contact-cmpnt-container'><span>Contact</span>
                </Link>
              </div>            
            </div>
          </div>

          <div id='footer-contacts' class='footer-col'>
            <p>CONTACT US</p>
            <div>
              <p><a href="mailto:learn@ardentlbs.io">learn@ardentlbs.io</a></p>
              <p>(949)-496-1688</p>
              <p>4199 Campus Drive</p>
              <p>Suite 260</p>
              <p>Irvine, CA 92612</p>
            </div>
          </div>

          <div id='footer-connect' class='footer-col'>
            <p>CONNECT</p>
            <div class='connect-item'>
              <div></div>
            </div>
          </div>

          <p>
            <span>this is  footer</span>
          </p>
        </div>
    );
  }
};

export default Footer;
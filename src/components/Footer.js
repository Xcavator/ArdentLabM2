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
            <div class='footer-col-title'>
              <p>QUICK LINKS</p>
            </div>
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
            <div class='footer-col-title'>
              <p>CONTACT US</p>
              </div>
            <div class='contact-info'>
              <p><a href="mailto:learn@ardentlbs.io">learn@ardentlbs.io</a></p>
              <p>(949)-496-1688</p>
              <br/>
              <p>4199 Campus Drive</p>
              <p>Suite 260</p>
              <p>Irvine, CA 92612</p>
            </div>
          </div>

          <div id='footer-connect' class='footer-col'>
            <div class='footer-col-title'>
            <p>CONNECT</p>
            </div>
            <div class='connect-list'>
            <div class='connect-item'>
              <a href="https://www.linkedin.com/company/ardentlabs"><img alt="White LinkedIn Icon" src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01/7528824071724d12a3e6c31eee0b40d4.webp" /></a>
            </div>
            <div class='connect-item'>
              <a href="https://twitter.com/ArdentLabsNews"><img alt="White Twitter Icon" src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01/01ab6619093f45388d66736ec22e5885.webp" /></a>
            </div>
            <div class='connect-item'>
              <a href="http://www.facebook.com/ArdentLabs.io"><img alt="White Facebook Icon" src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_53,h_53,al_c,q_85,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp"/></a>
            </div>
            </div>
          </div>
        </div>
    );
  }
};

export default Footer;
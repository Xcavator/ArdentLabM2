import React from "react";
import "./VerticalNav.css";
import { HashLink as Link } from 'react-router-hash-link';


class VerticalNav extends React.Component {
  render() {
    return (
        <div id="verticalNav-cmpnt-container">
          <Link activeClass="active" to="/#banner-cmpnt-container" smooth={true} />
          <Link activeClass="active" to="/#mission-cmpnt-container" smooth={true} />
          <Link activeClass="active" to="/#about-cmpnt-container" smooth={true} />
          <Link activeClass="active" to="/#portfolio-cmpnt-container" smooth={true} />
          <Link activeClass="active" to="/#internships-cmpnt-container" smooth={true} />
          <Link activeClass="active" to="/#contact-cmpnt-container" smooth={true} />
        </div>
    );
  }
};

export default VerticalNav;
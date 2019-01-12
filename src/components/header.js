import React, { Component } from 'react';
import ReactTextRotator from 'react-text-rotator';
import Burger from './burger.js';
import { Link, animateScroll as scroll } from "react-scroll";
import '../sass/style.sass';

class Header extends Component {
  render() {
    return (
      <div className="Header" id="header-section">
        <div className="nav-container">
          <div className="container">
            <div className="nav-bar">
              <div className="header-logo">
                <a><Link to="header-section" smooth={true}>ALEXEI</Link></a>
              </div>
              <Burger/>
              <nav id="navigation">
                <ul>
                  <li><a><Link to="header-section" smooth={true} activeClass="active" spy={true} offset={-70}>Home</Link></a></li>
                  <li><a><Link to="about" smooth={true} activeClass="active" spy={true} offset={-30}>About Me</Link></a></li>
                  <li><a><Link to="projects-section" smooth={true} activeClass="active" spy={true} offset={-30}>My Projects</Link></a></li>
                  <li><a><Link to="contact-section" smooth={true} activeClass="active" spy={true} offset={-20}>Contact</Link></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="welcome-area">
            <div className="header-text text-center">
              <MyComponent />
            </div>
            <div className="arrow-container">
              <div className="home-arrow-down">
                <a className="smooth-scroll btn"><Link to="about" smooth={true}><i className="fa fa-angle-double-down"></i></Link></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const content = [
  {
    text: 'Frontend Developer',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'Design Lover',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'Dreamer',
    className: 'classA',
    animation: 'fade',
  },
];

const MyComponent = () => (
  <div>
    <h2 id="alexei">I'm Alexei Stavila</h2>
    <ReactTextRotator
      content={content}
      time={3000}
      startDelay={1000}
    />
  </div>
);

export default Header;

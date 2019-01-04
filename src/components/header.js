import React, { Component } from 'react';
import ReactTextRotator from 'react-text-rotator';
import Burger from './burger.js';
import { BrowserRouter as Router } from 'react-router-dom';
import '../sass/style.sass';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="nav-container">
          <div className="container">
            <div className="nav-bar">
              <div className="header-logo">
                <a href="#">ALEXEI</a>
              </div>
              <Burger/>
              <nav id="navigation">

                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Me</a></li>
                  <li><a href="#">My Projects</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>



            </div>
          </div>
        </div>
        <div className="container">
          <div className="welcome-area">
            <div className="header-text text-center">
              <MyComponent />
              <div className="home-arrow-down">
                <a href="#about" className="smooth-scroll btn"><i className="fa fa-angle-double-down"></i></a>
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

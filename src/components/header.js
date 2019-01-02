import React, { Component } from 'react';
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
            <div class="header-text text-center">
              <h2>I'm Alexei Stavila</h2>
              <strong class="text-rotator font2 white"><span>Design Lover., Dreamer., Frontend Developer.</span></strong>
              <div class="home-arrow-down">
                <a href="#about" class="smooth-scroll btn"><i class="fa fa-angle-double-down"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

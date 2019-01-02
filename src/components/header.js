import React, { Component } from 'react';
import '../sass/style.sass';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="nav-bar">
          <div className="header-logo">
            ALEXEI
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
        <div className="welcome-area">
          
        </div>
      </div>
    );
  }
}

export default Header;

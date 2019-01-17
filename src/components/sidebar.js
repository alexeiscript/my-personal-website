import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";

export default props => {
  return (

    <Menu width='60%' right {...props}>
      <a className="menu-item"><Link to="header-section" smooth={true} activeClass="active" spy={true} offset={-70}>
        Home </ Link>
      </a>

      <a className="menu-item" href="/about"><Link to="about" smooth={true} activeClass="active" spy={true} offset={-30}>
        About Me </ Link>
      </a>

      <a className="menu-item" href="/projects"><Link to="projects-section" smooth={true} activeClass="active" spy={true} offset={-30}>
        My Projects </ Link>
      </a>

      <a className="menu-item"><Link to="contact-section" smooth={true} activeClass="active" spy={true} offset={-20}>
        Contact </ Link>
      </a>
    </Menu>
  );
};

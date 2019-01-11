import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, animateScroll as scroll } from "react-scroll";

export default props => {
  return (

    <Menu right {...props}>
      <a className="menu-item" href="/home">
        Home
      </a>

      <a className="menu-item" href="/about">
        About Me
      </a>

      <a className="menu-item" href="/projects">
        My Projects
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

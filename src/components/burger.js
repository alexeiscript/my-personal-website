import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../sass/style.sass';
import { slide as Menu } from "react-burger-menu";
import ReactDOM from "react-dom";
import SideBar from "./sidebar";

function Burger() {
  return (
    <div id="Burger">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"Burger"} />
      
      <div id="page-wrap">

      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Burger />, rootElement);

export default Burger;

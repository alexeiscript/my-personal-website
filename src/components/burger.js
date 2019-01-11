import React, { Component } from 'react';
import '../sass/style.sass';
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

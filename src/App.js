import React, { Component } from 'react';
import './sass/style.sass';
import Header from './components/header.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import Burger from './components/burger.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;

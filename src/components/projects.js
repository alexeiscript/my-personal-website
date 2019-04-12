import React, { Component } from 'react';
import '../sass/style.sass';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="container">
          <div id="projects-section">
            <div className="projects-header">
              <h2>My Projects</h2>
            </div>
            <div className="projects-content">
              <div className="project1 work">
                <div className="image">
                  <img src='../images/1.jpg' alt="JavaScriptQuizz"/>
                </div>
                <div className="items">
                  <h5>JavaScript Quiz</h5>
                  <p>A simple quiz I built using pure JavaScript</p>
                  <a id="project-button" href="http://alexeistavila.com/JavaScriptQuizz/" target="_blank">Visit project</a>
                </div>
              </div>
              <div className="project2 work">
                <div className="image">
                  <img src='../images/2.jpg' alt="verajam"/>
                </div>
                <div className="items">
                  <h5>Vera Jam Photography</h5>
                  <p>VeraJam Photography Website</p>
                  <a id="project-button" href="http://alexeistavila.com/verajam/index.html" target="_blank">Visit project</a>
                </div>
              </div>
              <div className="project3 work">
              <div className="image">
                <img src='../images/3.jpg' alt="CryptoSphere"/>
              </div>
              <div className="items">
                  <h5>CryptoSphere</h5>
                  <p>A website dedicated to blockchain and cryptocurrency enthusiasts</p>
                  <p>Work in progress...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

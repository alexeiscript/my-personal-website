import React, { Component } from 'react';
import TimelineSection from './timeline.js';
import '../sass/style.sass';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="container">
          <div id="about">
            <div className="about-content">
              <div className="about-heading">
                <h2 id="about-title">About Me</h2>
                <p id="about-subtitle">I have some knowledge and posess some skills.</p>
              </div>
              <div className="about-myself">
                <div className="about-text">
                  <h3 id="about-introduction" data-wow-delay="0.4s">I'm <strong>Alexei Stavila</strong> and I'm a <strong>frontend developer</strong> based in London, UK.</h3>
                  <p id="about-description" data-wow-delay="0.6s">Having worked in sectors such as customer service and administration, I decided to change my career for something technical and creative. I have serious passion for web design and creating intuitive, dynamic user experiences. My main goal at the moment is to obtain a junior frontend developer position and gain as much experience and knowledge as possible.</p>
                  <a id="cv-button" data-wow-delay=".8s" href="http://alexeistavila.com/CV-Alexei-Stavila.pdf">Download CV</a>
                </div>
                <div className="about-skills">
                  <ul className="skill-list">
                    <li><i className="fa fa-hand-point-right"></i>HTML5</li>
                    <li><i className="fa fa-hand-point-right"></i>C#</li>
                    <li><i className="fa fa-hand-point-right"></i>SASS</li>
                    <li><i className="fa fa-hand-point-right"></i>ASP.NET</li>
                    <li><i className="fa fa-hand-point-right"></i>JavaScript</li>
                    <li><i className="fa fa-hand-point-right"></i>SQL</li>
                    <li><i className="fa fa-hand-point-right"></i>React</li>
                    <li><i className="fa fa-hand-point-right"></i>Photoshop</li>
                    <li><i className="fa fa-hand-point-right"></i>WordPress</li>
                    <li><i className="fa fa-hand-point-right"></i>Illustrator</li>
                  </ul>
                </div>
              </div>
              <div className="my-timeline">
                <TimelineSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

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
              </div>
              <div className="about-myself">
                <div className="about-text">
                  <p id="about-description" data-wow-delay="0.6s">I'm Alexei Stavila and I'm a junior frontend developer based in London, UK. Having worked in sectors such as customer service and administration, I decided to change my career for something technical and creative. I have serious passion for web design and creating intuitive, dynamic user experiences. My main goal at the moment is to obtain a junior frontend developer position and gain as much experience and knowledge as possible. I have built this website using React.</p>
                  <a id="cv-button" data-wow-delay=".8s" href="http://alexeistavila.com/CV-Alexei-Stavila.pdf">Download CV</a>
                </div>
                <div className="about-skills">
                  <ul className="skill-list">
                    <li><i className="lnr lnr-chevron-right"></i>HTML5</li>
                    <li><i className="lnr lnr-chevron-right"></i>Git / GitHub</li>
                    <li><i className="lnr lnr-chevron-right"></i>CSS</li>
                    <li><i className="lnr lnr-chevron-right"></i>ASP.NET</li>
                    <li><i className="lnr lnr-chevron-right"></i>SASS</li>
                    <li><i className="lnr lnr-chevron-right"></i>SQL</li>
                    <li><i className="lnr lnr-chevron-right"></i>JavaScript</li>
                    <li><i className="lnr lnr-chevron-right"></i>Photoshop</li>
                    <li><i className="lnr lnr-chevron-right"></i>React</li>
                    <li><i className="lnr lnr-chevron-right"></i>Illustrator</li>
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

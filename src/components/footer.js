import React, { Component } from 'react';

import '../sass/style.sass';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="contact-details">
              <div className="contact-elements">
                <a  id="email-address" href="mailto:alexeistavila©hotmail.com" target="_blank" rel="noopener noreferrer">alexeistavila@hotmail.com</a>
              </div>
              <div className="contact-elements">
                <a id="phone-nr" href="tel:+44-774-342-5091" rel="noopener noreferrer">(+44) 077 434 25091</a>
              </div>
              <div className="contact-elements">
                <a href="https://github.com/alexeiscript" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
              </div>
              <div className="contact-elements">
                <a href="https://www.linkedin.com/in/alexei-stavila-874030175" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Footer;

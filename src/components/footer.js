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
                <a  id="email-address" href="mailto:alexeistavila©hotmail.com">alexeistavila@hotmail.com</a>
              </div>
              <div className="contact-elements">
                <a id="phone-nr">(+44) 07743425091</a>
              </div>
              <div className="contact-elements">
                <a href="https://github.com/alexeiscript"><i class="fab fa-github"></i></a>
              </div>
              <div className="contact-elements">
                <a href="https://www.linkedin.com/in/alexei-stavila-874030175"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Footer;

import React, { Component } from 'react';
import ContactForm from './contact-form.js';
import MapContainer from './google-maps.js';
import '../sass/style.sass';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="container">
          <div id="contact-section">
            <div className="contact-header">
              <h2>Contact Me</h2>
            </div>
            <div className="contact-content">
              <div className="contact-form children">
                <p>Let's create something awesome together...</p>
                <ContactForm />
              </div>
              <div className="google-maps children">
                <MapContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

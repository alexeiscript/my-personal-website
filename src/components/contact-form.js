import React, { Component } from "react";
import '../sass/style.sass';

class ContactForm extends Component {
  render() {
    return (
      <div className="ContactForm">
        <form method="post" action="https://formspree.io/alexeistavila@hotmail.com">
          <div className="form-div">
            <div class="name-field">
              <input type="text" name="name" className="styling" id="first-name" placeholder="Name" required="required" />
            </div>
            <div className="email-field">
              <input type="email" name="email" className="styling" id="email" placeholder="Email" required="required" />
            </div>
            <div className="message-field">
              <textarea rows="6" name="message" className="styling" id="description" placeholder="Your Message" required="required"></textarea>
            </div>
            <div className="send-button">
              <div className="sendBtn">
                <input type="submit" value="SEND" name="submit" id="submitButton" title="Click to Send Your Message!" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;

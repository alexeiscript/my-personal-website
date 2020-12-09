import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/contact.css';

function Contact() {
    return(
        <section className="contact">
            <div className="contact-div">
                <div className="left">
                    <h1>Get in touch</h1>
                    <p>If there's anything you would like to discuss,<br/>
                        please feel free to send me an email</p>
                    <p id="email"><FontAwesomeIcon icon={faEnvelope} size="lg" className="icons"/> alexei.stavila@gmail.com</p>
                </div>
                <div className="right">
                    <p>My Github profile <FontAwesomeIcon icon={faGithub} size="lg" className="icons"/></p>
                    <p>My Linkedin profile <FontAwesomeIcon icon={faLinkedin} size="lg" className="icons"/></p>
                </div>
            </div>
        </section>
    )
}

export default Contact;
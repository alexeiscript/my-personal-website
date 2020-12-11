import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from '@material-ui/core/Link';
import '../styles/contact.css';

function Contact() {
    
    return(
        <section className="contact">
            <div className="contact-div">
                <div className="left">
                    <h1>Get in touch</h1>
                    <p>If there's anything you would like to discuss, <br/>
                        please feel free to send me an email</p>
                    <Link color="inherit" underline="none" href="mailto:alexei.stavila@gmail.com">
                        <p id="email"><FontAwesomeIcon icon={faEnvelope} size="lg" className="contactIcons"/> alexei.stavila@gmail.com</p>
                    </Link>
                </div>
                <div className="right">
                   
                    <Link underline="none" variant="body1" color="inherit" onClick={() => window.open('https://github.com/alexeiscript', '_blank', 'noopener', 'noreferrer')}>
                        <p><FontAwesomeIcon icon={faGithub} size="lg" className="iconsMobile" id="gitIcon"/>My Github profile <FontAwesomeIcon icon={faGithub} size="lg" className="contactIcons"/></p>
                    </Link>
                    <Link underline="none" variant="body1" color="inherit" onClick={() => window.open('https://linkedin.com/in/alexei-stavila', '_blank', 'noopener', 'noreferrer')}>
                        <p><FontAwesomeIcon icon={faLinkedin} size="lg" className="iconsMobile"/>My Linkedin profile <FontAwesomeIcon icon={faLinkedin} size="lg" className="contactIcons"/></p>
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact;
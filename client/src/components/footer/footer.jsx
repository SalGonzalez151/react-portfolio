import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

function Footer() {
    return (
        <Container className="text-center footer-container">
            <h5 >all rights reserved</h5>
            <a className="social-links mx-3" href="https://www.linkedin.com/in/sal-gonzalez-1988567a/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className="social-links" href="https://github.com/SalGonzalez151"><FontAwesomeIcon icon={faGithub} /></a>
        </Container>
    )
}

export default Footer;
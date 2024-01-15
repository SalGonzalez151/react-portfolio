import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <Container className="text-center">
            <h5 >this is a footer</h5>
            <a className="social-links mx-3" href="https://www.linkedin.com/in/sal-gonzalez-1988567a/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className="social-links" href="https://github.com/SalGonzalez151"><FontAwesomeIcon icon={faGithub} /></a>
        </Container>
    )
}

export default Footer;
import './aboutme.css'
import avatar from '../../assets/test-avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Container, Image, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <div className="main-page text-center">
            <Container>
            
                        <Row>
                            <p className="para-title">I am a Full-Stack developer / Software Engineer / Data Engineer</p>
                            <p className="text-para text-center">I am Sal Gonzalez I am a Full-Stack developer / Software Engineer / Data Engineer in Los Angeles CA. I am passionate about coding and always looking forward to learning new languages as much as I can. I like to play video games and watching movies and sports. I used to work in the mortgage industry.</p>
                        </Row>
            </Container>
        </div>
    )
}

export default About;
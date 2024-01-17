
import About from '../aboutme/aboutme.jsx'
import Resume from '../resume/resume.jsx'
import avatar from '../../assets/test-avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import './profilePane.css'
import { Container, Image, Row, Col } from 'react-bootstrap';

function ProfilePane() {
  return (
    <div>
      <Container className="profile-container">
        <Col className="profile-column" >
          <Row className="avatar-image">
            <Image className="picture-image" rounded src={avatar} />
          </Row>
          <Row>
            <h1 className="name-title text-center">Sal Gonzalez</h1>
          </Row>
          <Row>
            <About />
          </Row>
          <Row className="">
            <Col className="profile-links text-center">
          <a className="social-links " href="https://www.linkedin.com/in/sal-gonzalez-1988567a/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a className="social-links" href="https://github.com/SalGonzalez151"><FontAwesomeIcon icon={faGithub} /></a>
          </Col>
          </Row>
          <Row>
            <Resume />
          </Row>
        </Col>
      </Container>
    </div>
  )
}

export default ProfilePane
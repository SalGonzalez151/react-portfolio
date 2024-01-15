
import About from '../aboutme/aboutme.jsx'
import Resume from '../resume/resume.jsx'
import avatar from '../../assets/test-avatar.jpg'
import './profilePane.css'
import { Container, Image, Row, Col } from 'react-bootstrap';

function ProfilePane() {
  return (
    <div>
      <Container className="">
        <Col className="">
          <Row className="avatar-image justify-content-md-center">
            <Image className="picture-image text-center" roundedCircle src={avatar} />
          </Row>
          <Row>
            <h1 className="name-title text-center">Sal Gonzalez</h1>
          </Row>
          <Row>
            <About />
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
import { Container, Image, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import './resume.css'



function Resume() {
    return (
        <Container className="">
            <Col>
                <h3>Skills</h3>
                <h5>
                    <Badge bg="dark">HTML</Badge>
                </h5>
                <h5>
                    <Badge bg="dark">CSS</Badge>
                </h5>
                <h5>
                    <Badge bg="dark">JavaScript</Badge>
                </h5>
                <h5>
                    <Badge bg="dark">MySQL</Badge>
                </h5>
                <h5>
                    <Badge bg="dark">Sequelize</Badge>
                </h5>
                <h5>
                    <Badge bg="dark">Node.js</Badge>
                </h5>
                <h5>
                    <Badge bg="dark">express.js</Badge>
                </h5>
                <h5>
                    <Badge bg="dark">MongoDB</Badge>
                </h5>
                <h5>
                    <Badge bg="dark">React</Badge>
                </h5>
                <h5>
                    <Badge bg="dark">Bootstrap</Badge>
                </h5>
            </Col>
        </Container>
    )
}

export default Resume;
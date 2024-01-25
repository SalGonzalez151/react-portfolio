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
                
                    <Badge bg="dark">CSS</Badge>
                
                    <Badge bg="dark">JavaScript</Badge>
                
                    <Badge bg="dark">MySQL</Badge>
                
                    <Badge bg="dark">Sequelize</Badge>
                
                    <Badge bg="dark">Node.js</Badge>
                
                    <Badge bg="dark">express.js</Badge>
                
                    <Badge bg="dark">MongoDB</Badge>
                
                    <Badge bg="dark">React</Badge>
                
                    <Badge bg="dark">Bootstrap</Badge>
                </h5>
            </Col>
        </Container>
    )
}

export default Resume;
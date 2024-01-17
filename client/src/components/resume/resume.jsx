import { Container, Image, Row, Col } from 'react-bootstrap';
import './resume.css'



function Resume() {
    return (
        <Container className="">
            <Col>
                <h3>Skills</h3>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Sequelize
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        express.js
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Bootstrap
                    </li>
                </ul>
            </Col>
        </Container>
    )
}

export default Resume;
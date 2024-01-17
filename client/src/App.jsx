import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import ProfilePane from './components/profilePane/ProfilePane.jsx'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Portfolio from './components/portfolio/Portfolio.jsx'
import './App.css'

function App() {
  const [key, setKey] = useState('home');
  return (
    <div>
      <Header />
      <Container className="app-container">
        <Row>
          <Col className="col-4">
            <Row>
              <ProfilePane />
            </Row>

          </Col>
          <Col>
            <Row>
              <Tabs

                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="home" title="Home">
                  Tab content for Home
                </Tab>
                <Tab eventKey="Portfolio" title="Portfolio">
                   <Portfolio />

                  
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                  Tab content for Contact
                </Tab>
              </Tabs>
            </Row>

          </Col>
        </Row>
        <Footer />
      </Container>

      
    </div>
  )
}

export default App

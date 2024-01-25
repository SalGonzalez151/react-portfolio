import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer.jsx'
import ProfilePane from './components/profilePane/ProfilePane.jsx'
import Header from './components/header/header.jsx'
import { Container, Image, Row, Col } from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <div>
      
      <main>

        <Container className="app-container">
          <Row>
            <Col className="col-4">
              <Row>
                <ProfilePane />
                
              </Row>
              <Row>
              </Row>
            </Col>
            <Col>
            <Header />
              <Outlet />
            </Col>

          </Row>
          <Footer />
        </Container>

      </main>
    </div>
  )
}

export default App

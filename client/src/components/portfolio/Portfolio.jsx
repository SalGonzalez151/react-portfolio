import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Techblog from '../../assets/techblog-preview.png'
import WeatherApp from '../../assets/weather-app-preview.png'
import AnyYes from '../../assets/anyyes-preview.png'

function Portfolio() {
  return (
    <Container>
      <h3>Current Projects:</h3>
      <Row>
        
          <Col>
        <Card /*style={{ width: '18rem' }}*/>
          <Card.Img variant="top" src={WeatherApp} />
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Card.Text>
             A weather app that gets the 5 day forecast. uses JavaScript, a weather api, and localstorage to save the search history.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
          <Card /*style={{ width: '18rem' }}*/>
            <Card.Img variant="top" src={Techblog} />
            <Card.Body>
              <Card.Title>TechBlog</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
        <Col>
          <Card /*style={{ width: '18rem' }}*/>
            <Card.Img variant="top" src={AnyYes} />
            <Card.Body>
              <Card.Title>AnyYes</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
        
        </Row>
    </Container>
  )
}

export default Portfolio
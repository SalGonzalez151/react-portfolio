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
      <Col>
        <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={WeatherApp} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Techblog} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        
        
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={AnyYes} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        
        </CardGroup>
      </Col>
    </Container>
  )
}

export default Portfolio
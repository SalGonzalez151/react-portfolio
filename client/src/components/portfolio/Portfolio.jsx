import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Techblog from '../../assets/techblog-preview.png'
import WeatherApp from '../../assets/weather-app-preview.png'
import AnyYes from '../../assets/anyyes-preview.png'

function Portfolio() {
  return (
    <Container >
      <h3 className="mt-3">Current Projects:</h3>
      <Row>
          <Col>
        <Card >
          <Card.Img variant="top" src={WeatherApp} />
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Card.Text>
             A weather app that gets the 5 day forecast. uses JavaScript, a weather api, and localstorage to save the search history.
            </Card.Text>
            <Button a href="https://salgonzalez151.github.io/weather-dashboard/" className="m-3" variant="primary">Website</Button>
            <Button a href="https://github.com/SalGonzalez151/weather-dashboard" variant="primary">Github</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col>
          <Card >
            <Card.Img variant="top" src={Techblog} />
            <Card.Body>
              <Card.Title>TechBlog</Card.Title>
              <Card.Text>
                A simple techblog. Allows the user to post, edit post, delete post and comment on post. 
              </Card.Text>
              <Button  className="m-3" variant="primary">Website</Button>
              <Button variant="primary">Github</Button>
            </Card.Body>
          </Card>
          </Col>
        <Col>
          <Card >
            <Card.Img variant="top" src={AnyYes} />
            <Card.Body>
              <Card.Title>AnyYes</Card.Title>
              <Card.Text>
                e-commerce website built to buy or sell old retro games. Allows users to make accounts and upload pictures
              </Card.Text>
              <Button a href="https://anyyes-3bf9b8d1cf29.herokuapp.com/" className="m-3" variant="primary">Website</Button>
              <Button a href="https://github.com/SalGonzalez151/anyYes" variant="primary">Github</Button>
            </Card.Body>
          </Card>
          </Col>
        
        </Row>
    </Container>
  )
}

export default Portfolio
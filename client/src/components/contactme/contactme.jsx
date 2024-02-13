import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';


function ContactMe() {
  const handleSubmit = (event) => {
    event.preventDefault();

  }

  return (

    <>
      <Form >
        <Container className="container-contact">
          <p className="contact-me mt-3">Totally not a robot </p>
          <Row className="contact-form">
            <Col >
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Name</InputGroup.Text>
                <Form.Control
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="contact-form">
            <Col >
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="contact-form">
            <Col >
              <InputGroup className="mb-3">
                <InputGroup.Text>Message</InputGroup.Text>
                <Form.Control
                  name="message"
                  as="textarea"
                  aria-label="With textarea"
                  style={{ height: '200px' }}
                />
              </InputGroup>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Container>
      </Form>
    </>
  );
}

export default ContactMe;
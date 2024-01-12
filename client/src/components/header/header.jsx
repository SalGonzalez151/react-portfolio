import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
return (
    <>
    <nav>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Sal Gonzalez</Navbar.Brand>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">portfolio</Nav.Link>
      </Container>
    </Navbar>
    </nav>
    </>
)
}

export default Header
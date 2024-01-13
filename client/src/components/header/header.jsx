import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand> Sal Gonzalez </Navbar.Brand>
                    <Nav className="me-auto nav-bar" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="basic-navbar-nav">
                            <Nav.Link href="#aboutme">About Me</Nav.Link>
                            <Nav.Link href="#resume">Resume</Nav.Link>
                            <Nav.Link href="#contactme">Contact Me</Nav.Link>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
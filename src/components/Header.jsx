import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4 text-primary">
          NextNation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="px-3 fw-semibold">Home</Nav.Link>
            <Nav.Link href="#services" className="px-3 fw-semibold">Services</Nav.Link>
            <Nav.Link href="#team" className="px-3 fw-semibold">Team</Nav.Link>
            <Nav.Link href="#testimonials" className="px-3 fw-semibold">Testimonials</Nav.Link>
            <Nav.Link href="#contact" className="px-3 fw-semibold">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are a company that specializes in providing quality services to our customers.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/about" className="text-white">About</Nav.Link>
              <Nav.Link href="/services" className="text-white">Services</Nav.Link>
              <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <Nav className="flex-column">
              <Nav.Link href="https://facebook.com" target="_blank" className="text-white">Facebook</Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank" className="text-white">Twitter</Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" className="text-white">Instagram</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr className="text-white" />
        <Row className="text-center">
          <Col>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Home() {
  return (
    <>
    <Container> 
      {/* Hero Section */}
      <header className="hero-section text-center text-light d-flex align-items-center" style={{ height: '80vh', backgroundColor: '#343a40' }}>
        <Container>
          <Row>
            <Col>
              <h1 className="display-4">Welcome to My Website</h1>
              <p className="lead">A brief description of who I am and what I do.</p>
              <Button variant="primary" size="lg" href="#about">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </header>

      {/* About Section */}
      <Container id="about" className="my-5">
        <Row>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              Hello! I'm a web developer passionate about building dynamic and responsive websites. I specialize in
              front-end development, but I'm always eager to learn new things and expand my skill set.
            </p>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <Card.Text>
                  <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, TypeScript</li>
                    <li>Node.js, Express</li>
                    <li>Database Management</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  A description of my first project. This could be a personal website, a web app, or something else.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Project Two</Card.Title>
                <Card.Text>
                  A description of my second project. This could include any side projects or apps I've built.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Project Three</Card.Title>
                <Card.Text>
                  Another project I’ve worked on. This could be a more advanced project showcasing specific skills.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="bg-dark text-light text-center p-4">
        <p>&copy; 2024 My Website | All Rights Reserved</p>
        <p>
          <a href="/contact" className="text-light">Contact</a> | 
          <a href="/about" className="text-light"> About</a>
        </p>
      </footer>
      </ Container> 
    </>
  );
}

export default Home;

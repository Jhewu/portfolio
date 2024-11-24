import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Profile" />
            <Card.Body>
              <Card.Title>Jun Yi He Wu</Card.Title>
              <Card.Text>
                Front-End Developer passionate about building beautiful and responsive websites.
              </Card.Text>
              <Button variant="primary" href="/contact">Contact Me</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <h2>About Me</h2>
          <p>
            Hello! I'm Jun Yi He Wu, a passionate front-end developer with experience in creating
            responsive, interactive, and visually appealing web applications. I have a strong
            foundation in HTML, CSS, JavaScript, and React, and I’m always excited to learn new
            technologies to enhance my skills.
          </p>

          <h3>Skills</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React, Redux</li>
            <li>Bootstrap, Material UI</li>
            <li>Version Control with Git</li>
            <li>Responsive Design</li>
          </ul>

          <h3>My Journey</h3>
          <p>
            I started my journey as a self-taught developer, learning the fundamentals through
            online resources and hands-on projects. Over time, I’ve worked on several personal and
            freelance projects, and I'm always eager to work with others and expand my skill set.
          </p>

          <h3>Contact Information</h3>
          <p>
            Feel free to reach out if you would like to collaborate or just chat about tech!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

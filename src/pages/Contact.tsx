import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

// Define types for the form data state
interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Handle input changes, specifying the type of the event
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission, specifying the type of the event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // Simple validation (can be improved)
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage('All fields are required.');
      setShowAlert(true);
    } else {
      // For simplicity, we'll display a success message.
      setAlertMessage('Thank you for your message!');
      setShowAlert(true);
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h2>Contact Us</h2>
          <p>Feel free to reach out with any questions or comments!</p>
          {showAlert && (
            <Alert variant={alertMessage === 'Thank you for your message!' ? 'success' : 'danger'}>
              {alertMessage}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Our Location</h3>
          <p>
            You can also contact us via email or visit our office at the following address:
          </p>
          <p>1234 Main St, Hometown, Country</p>
          <p>Email: example@example.com</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

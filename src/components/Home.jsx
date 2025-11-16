import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Nav } from 'react-bootstrap';
import NavbarComponent from './Navbar';

const Home = () => {
  return (
    <>
      <NavbarComponent />

      {/* Hero Section */}
      <section className="hero-section bg-light position-relative overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Background decorative elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div className="bg-primary rounded-circle position-absolute"
               style={{ width: '300px', height: '300px', top: '10%', left: '10%', opacity: 0.1 }}></div>
          <div className="bg-success rounded-circle position-absolute"
               style={{ width: '200px', height: '200px', top: '60%', right: '15%', opacity: 0.1 }}></div>
          <div className="bg-warning rounded-circle position-absolute"
               style={{ width: '150px', height: '150px', bottom: '20%', left: '20%', opacity: 0.1 }}></div>
        </div>

        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-center text-lg-start">
              <div className="hero-content">
                <h1 className="display-4 fw-bold text-primary mb-3">
                  Let&apos;s Create
                </h1>
                <h2 className="display-5 fw-bold text-dark mb-3">
                  Your Own Style
                </h2>
                <p className="lead text-muted mb-4">
                  Unleash your creativity, explore new possibilities
                </p>
                <Button as={Link} to="/custom" size="lg" className="px-5 py-3 fw-bold">
                  Get Started
                  <i className="fas fa-arrow-right ms-2"></i>
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src='/images/baju.png'
                alt="Fashion illustration"
                className="img-fluid"
                style={{ maxHeight: '500px' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-white">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 fw-bold text-dark mb-4">Our Services</h2>
              <p className="lead text-muted">
                With a variety of options to choose from, our services are carefully designed to meet
                customer needs and enhance their design experience
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {/* Customization Service */}
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <img
                      src='/images/custom.png'
                      alt="Customization"
                      className="rounded-circle bg-light p-3"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Title className="h5 fw-bold text-dark mb-3">Customization</Card.Title>
                  <Card.Text className="text-muted">
                    You can customize your style with customization features that use 3D technology
                  </Card.Text>
                  <Button as={Link} to="/custom" variant="primary" className="mt-3">
                    Start Customizing
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Inspiration Service */}
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <img
                      src='/images/star.png'
                      alt="Inspiration"
                      className="rounded-circle bg-light p-3"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Title className="h5 fw-bold text-dark mb-3">Inspiration</Card.Title>
                  <Card.Text className="text-muted">
                    You can find a variety of fashion inspirations here
                  </Card.Text>
                  <Button as={Link} to="/inspiration" variant="success" className="mt-3">
                    Get Inspired
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Tailor Service */}
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="text-center p-4">
                  <div className="mb-3">
                    <img
                      src='/images/taylor.png'
                      alt="Tailor"
                      className="rounded-circle bg-light p-3"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                  </div>
                  <Card.Title className="h5 fw-bold text-dark mb-3">Tailor&apos;s Recommendation</Card.Title>
                  <Card.Text className="text-muted">
                    Consult your design results and wait for the tailor to realize your dream style
                  </Card.Text>
                  <Button variant="info" className="mt-3">
                    Contact Tailor
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center mb-3 mb-md-0">
                <img
                  src='/src/assets/logo padupadan.png'
                  alt="Padupadan Logo"
                  className="me-3"
                  style={{ height: '40px' }}
                />
                <h5 className="mb-0 fw-bold">Padupadan</h5>
              </div>
            </Col>
            <Col md={6}>
              <Nav className="justify-content-end">
                <Nav.Link as={Link} to="/" className="text-light px-3">Home</Nav.Link>
                <Nav.Link as={Link} to="/inspiration" className="text-light px-3">Inspiration</Nav.Link>
                <Nav.Link as={Link} to="/custom" className="text-light px-3">Customization</Nav.Link>
              </Nav>
            </Col>
          </Row>
          <hr className="my-3" />
          <Row>
            <Col className="text-center">
              <small className="text-muted">© Copyright 2024 Padupadan. All rights reserved.</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Home;

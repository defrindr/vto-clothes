import { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import NavbarComponent from './Navbar';

const Landingpage = () => {
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleSignupPopup = () => {
    setShowSignupPopup(!showSignupPopup);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <>
      <NavbarComponent />

      {/* Hero Section */}
      <section className="hero-section bg-gradient-primary text-white py-5 position-relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div className="bg-circle position-absolute" style={{
            width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%', top: '10%', left: '10%'
          }}></div>
          <div className="bg-circle position-absolute" style={{
            width: '150px', height: '150px', background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%', top: '60%', right: '15%'
          }}></div>
          <div className="bg-circle position-absolute" style={{
            width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%', bottom: '20%', left: '20%'
          }}></div>
        </div>

        <Container className="position-relative">
          <Row className="align-items-center min-vh-75">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-3">
                  Let&apos;s Create
                  <span className="text-warning d-block">Your</span>
                  <span className="text-info d-block">Own Style</span>
                </h1>
                <p className="lead mb-4 text-light">
                  Unleash your creativity, explore new possibilities
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Button
                    as={Link}
                    to="/custom"
                    variant="light"
                    size="lg"
                    className="px-4 py-2 fw-bold"
                  >
                    Get Started
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="px-4 py-2"
                    onClick={toggleSignupPopup}
                  >
                    Sign Up
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="px-4 py-2"
                    onClick={toggleLoginPopup}
                  >
                    Log In
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image-container position-relative">
                <img
                  src="/images/baju.png"
                  alt="Fashion illustration"
                  className="img-fluid rounded shadow-lg"
                  style={{ maxHeight: '500px' }}
                />
                <div className="position-absolute bottom-0 end-0 bg-white rounded-circle d-flex align-items-center justify-content-center shadow"
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-magic text-primary" style={{ fontSize: '2rem' }}></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold text-dark mb-3">Our Services</h2>
              <p className="lead text-muted">
                With a variety of options to choose from, our services are carefully designed
                to meet customer needs and enhance their design experience
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="text-center p-4">
                  <div className="service-icon mb-3">
                    <img
                      src="/images/custom.png"
                      alt="Customization"
                      className="mb-3"
                      style={{ height: '80px' }}
                    />
                  </div>
                  <Card.Title className="h4 fw-bold text-primary mb-3">
                    Customization
                  </Card.Title>
                  <Card.Text className="text-muted">
                    You can customize your style with customization features that use 3D technology
                  </Card.Text>
                  <Button as={Link} to="/custom" variant="primary" className="mt-3">
                    Start Customizing
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="text-center p-4">
                  <div className="service-icon mb-3">
                    <img
                      src="/images/star.png"
                      alt="Inspiration"
                      className="mb-3"
                      style={{ height: '80px' }}
                    />
                  </div>
                  <Card.Title className="h4 fw-bold text-warning mb-3">
                    Inspiration
                  </Card.Title>
                  <Card.Text className="text-muted">
                    You can find a variety of fashion inspirations here
                  </Card.Text>
                  <Button as={Link} to="/inspiration" variant="warning" className="mt-3">
                    Get Inspired
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="text-center p-4">
                  <div className="service-icon mb-3">
                    <img
                      src="/images/taylor.png"
                      alt="Tailor's recommendation"
                      className="mb-3"
                      style={{ height: '80px' }}
                    />
                  </div>
                  <Card.Title className="h4 fw-bold text-info mb-3">
                  Tailor&apos;s Recommendation
                  </Card.Title>
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

          {/* Experience Section */}
          <Row className="mt-5">
            <Col className="text-center">
              <div className="experience-card bg-primary text-white rounded p-4 shadow">
                <h3 className="h2 fw-bold mb-3">Feel a New Experience</h3>
                <p className="lead mb-0">
                  That you have never tried before
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center mb-3 mb-md-0">
                <img
                  src="/src/assets/logo padupadan.png"
                  alt="Padupadan Logo"
                  className="me-3"
                  style={{ height: '40px' }}
                />
                <h5 className="mb-0 fw-bold">Padupadan</h5>
              </div>
            </Col>
            <Col md={6}>
              <nav className="d-flex justify-content-end">
                <Link to="/" className="text-light text-decoration-none me-3">Home</Link>
                <Link to="/inspiration" className="text-light text-decoration-none me-3">Inspiration</Link>
                <Link to="/custom" className="text-light text-decoration-none">Customization</Link>
              </nav>
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

      {/* Modals */}
      {showSignupPopup && <Signup toggleSignupPopup={toggleSignupPopup} />}
      {showLoginPopup && <Login toggleLoginPopup={toggleLoginPopup} />}
    </>
  );
};

export default Landingpage;

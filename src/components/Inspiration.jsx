import { Container, Row, Col, Card, Button, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarComponent from './Navbar';

const Inspiration = () => {
  // Sample inspiration images - replace with actual image paths
  const inspirationImages = [
    { id: 1, src: '/images/fashion1.jpg', title: 'Modern Casual', category: 'Casual' },
    { id: 2, src: '/images/fashion2.jpg', title: 'Business Formal', category: 'Formal' },
    { id: 3, src: '/images/fashion3.jpg', title: 'Street Style', category: 'Streetwear' },
    { id: 4, src: '/images/fashion4.jpg', title: 'Evening Wear', category: 'Evening' },
    { id: 5, src: '/images/fashion5.jpg', title: 'Summer Vibes', category: 'Summer' },
    { id: 6, src: '/images/fashion6.jpg', title: 'Winter Collection', category: 'Winter' },
    { id: 7, src: '/images/fashion7.jpg', title: 'Bohemian Style', category: 'Bohemian' },
    { id: 8, src: '/images/fashion8.jpg', title: 'Minimalist', category: 'Minimal' },
    { id: 9, src: '/images/fashion9.jpg', title: 'Vintage Inspired', category: 'Vintage' },
    { id: 10, src: '/images/fashion10.jpg', title: 'Athleisure', category: 'Sport' },
    { id: 11, src: '/images/fashion11.jpg', title: 'Gothic Edge', category: 'Gothic' },
    { id: 12, src: '/images/fashion12.jpg', title: 'Preppy Style', category: 'Preppy' },
  ];

  return (
    <>
      <NavbarComponent />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-3">Fashion Inspiration</h1>
              <p className="lead mb-4">
                Discover the latest fashion trends and get inspired for your next outfit
              </p>
            </Col>
            <Col lg={4}>
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto"
                   style={{ width: '150px', height: '150px', opacity: 0.9 }}>
                <i className="fas fa-lightbulb text-primary" style={{ fontSize: '4rem' }}></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search Section */}
      <section className="py-4 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <i className="fas fa-search"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search fashion styles..."
                  className="border-start-0"
                />
                <Button variant="primary">
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Inspiration Gallery */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {inspirationImages.map((image) => (
              <Col lg={3} md={4} sm={6} key={image.id}>
                <Card className="h-100 border-0 shadow-sm hover-lift">
                  <div className="position-relative overflow-hidden rounded-top">
                    <Card.Img
                      variant="top"
                      src={image.src}
                      alt={image.title}
                      className="img-fluid"
                      style={{ height: '250px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = '/images/placeholder.jpg'; // Fallback image
                      }}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <Button
                        variant="light"
                        size="sm"
                        className="rounded-circle"
                        style={{ width: '35px', height: '35px' }}
                      >
                        <i className="fas fa-heart text-danger"></i>
                      </Button>
                    </div>
                    <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark text-white p-2">
                      <small className="fw-bold">{image.category}</small>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="h6 fw-bold text-dark mb-2">
                      {image.title}
                    </Card.Title>
                    <Card.Text className="text-muted small grow">
                      Get inspired by this stunning {image.category.toLowerCase()} look
                    </Card.Text>
                    <div className="d-flex gap-2 mt-auto">
                      <Button
                        as={Link}
                        to="/custom"
                        variant="outline-primary"
                        size="sm"
                        className="flex-fill"
                      >
                        <i className="fas fa-magic me-1"></i>
                        Customize
                      </Button>
                      <Button variant="outline-secondary" size="sm">
                        <i className="fas fa-share-alt"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Load More Button */}
          <Row className="mt-5">
            <Col className="text-center">
              <Button variant="primary" size="lg" className="px-5">
                <i className="fas fa-plus me-2"></i>
                Load More Inspiration
              </Button>
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
                  src='/src/assets/logo padupadan.png'
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
    </>
  );
};

export default Inspiration;

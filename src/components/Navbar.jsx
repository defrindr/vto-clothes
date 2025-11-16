import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo padupadan.png';

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm border-bottom">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          <img
            src={logo}
            alt="Padupadan Logo"
            className="me-2"
            style={{ height: '40px' }}
          />
          <span className="fw-bold text-primary">Padupadan</span>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/inspiration"
              className={`nav-link ${location.pathname === '/inspiration' ? 'active' : ''}`}
            >
              Inspiration
            </Link>
            <Link
              to="/custom"
              className={`nav-link ${location.pathname === '/custom' ? 'active' : ''}`}
            >
              Customization
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

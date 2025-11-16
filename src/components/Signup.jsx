import { useState } from 'react';
import { Modal, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from './Login';

const Signup = ({ toggleSignupPopup }) => {
  const history = useHistory();
  const [showPasswordSignup, setShowPasswordSignup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await axios.post('http://localhost/kustomisasi3d/backend/register.php', values);

      if (res.data.message === 'Registration successful') {
        history.push('/Inspiration');
      } else {
        setErrorMessage('Registration failed: ' + res.data.message);
      }
    } catch (err) {
      console.error('Error registering user:', err);
      setErrorMessage('Error registering user: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibilitySignup = () => {
    setShowPasswordSignup(!showPasswordSignup);
  };

  const handleHaveAccountClick = () => {
    setShowLoginPopup(true);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <>
      <Modal show={true} onHide={toggleSignupPopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {errorMessage && (
              <Alert variant="danger" className="mb-3">
                {errorMessage}
              </Alert>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i className="fas fa-user"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i className="fas fa-envelope"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPasswordSignup ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={togglePasswordVisibilitySignup}
                >
                  <i className={`fas ${showPasswordSignup ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </Button>
              </InputGroup>
            </Form.Group>

            <div className="text-center">
              <Button
                variant="link"
                className="p-0 text-decoration-none"
                onClick={handleHaveAccountClick}
              >
                Already have an account? Log in
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleSignupPopup}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {showLoginPopup && <Login toggleLoginPopup={toggleLoginPopup} />}
    </>
  );
};

Signup.propTypes = {
  toggleSignupPopup: PropTypes.func.isRequired,
};

export default Signup;
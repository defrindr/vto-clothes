import { useState } from 'react';
import { Modal, Button, Form, InputGroup, Alert } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import Signup from './Signup';

const Login = ({ toggleLoginPopup }) => {
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [values, setValues] = useState({
    name: '',
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
      const res = await axios.post('http://localhost/kustomisasi3d/backend/login.php', JSON.stringify(values), {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (res.data.message === "Login successful") {
        window.location.href = '/Inspiration';
      } else {
        setErrorMessage(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibilityLogin = () => {
    setShowPasswordLogin(!showPasswordLogin);
  };

  const handleCreateAccountClick = () => {
    setShowSignupPopup(true);
  };

  const toggleSignupPopup = () => {
    setShowSignupPopup(!showSignupPopup);
  };

  return (
    <>
      <Modal show={true} onHide={toggleLoginPopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
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
                  name="name"
                  placeholder="Enter your username"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPasswordLogin ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={togglePasswordVisibilityLogin}
                >
                  <i className={`fas ${showPasswordLogin ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </Button>
              </InputGroup>
            </Form.Group>

            <div className="text-center">
              <Button
                variant="link"
                className="p-0 text-decoration-none"
                onClick={handleCreateAccountClick}
              >
                Don&apos;t have an account? Create one
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleLoginPopup}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {showSignupPopup && <Signup toggleSignupPopup={toggleSignupPopup} />}
    </>
  );
};

Login.propTypes = {
  toggleLoginPopup: PropTypes.func.isRequired,
};

export default Login;

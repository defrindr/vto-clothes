import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/kustomisasi3d/backend/register.php', values)
      .then(res => {
        console.log(res.data);
        if (res.data.message === 'Registration successful') {
          history.push('/Inspiration'); // Sesuaikan dengan rute halaman beranda Anda
        } else {
          alert('Registration failed: ' + res.data.message);
        }
      })
      .catch(err => {
        console.error('Error registering user:', err);
        alert('Error registering user: ' + err.message);
      });
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

  const handleOutsideClick = (event) => {
    if (event.target.className === 'popup') {
      toggleSignupPopup();
    }
  };

  return (
    <div>
      {!showLoginPopup && (
        <div className="popup" onClick={handleOutsideClick}>
          <div className="popup-inner">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                onChange={handleChange}
                value={values.username}
                required
              />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                onChange={handleChange}
                value={values.email}
                required
              />
              <input
                type={showPasswordSignup ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Password'
                onChange={handleChange}
                value={values.password}
                required
              />
              <img
                src='/images/mataterbuka.png'
                onClick={togglePasswordVisibilitySignup}
                className="pass-icon3"
                alt="Show Password"
              />
              <img
                src='/images/user.png'
                className="pass-icon4"
                alt="User Icon"
              />
              <img
                src='/images/email.png'
                className="pass-icon5"
                alt="Email Icon"
              />
              <div className='have_account' onClick={handleHaveAccountClick}>
                Have account?
              </div>
              <button type="submit" className="create-button">Create</button>
            </form>
          </div>
        </div>
      )}
      {showLoginPopup && <Login toggleLoginPopup={toggleLoginPopup} />}
    </div>
  );
}

export default Signup;

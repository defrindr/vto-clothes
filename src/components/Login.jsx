import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import Signup from './Signup'; // Import komponen Signup

const Login = ({ toggleLoginPopup }) => {
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false); // State untuk mengelola popup Signup
  const [values, setValues] = useState({
    name: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(''); // State untuk menampilkan pesan kesalahan

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/kustomisasi3d/backend/login.php', JSON.stringify(values), {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      console.log(res.data);
      if (res.data.message === "Login successful") {
        // Arahkan ke halaman home atau halaman lain yang diinginkan
        window.location.href = '/Inspiration'; // Ganti '/home' dengan rute halaman yang diinginkan
      } else {
        setErrorMessage(res.data.message); // Tampilkan pesan kesalahan dari server
      }
    })
    .catch(err => {
      console.error(err);
      setErrorMessage('An error occurred while processing your request.');
    });
  };

  const togglePasswordVisibilityLogin = () => {
    setShowPasswordLogin(!showPasswordLogin);
  };

  const handleCreateAccountClick = () => {
    setShowSignupPopup(true); // Menampilkan popup Signup
  };

  const toggleSignupPopup = () => {
    setShowSignupPopup(!showSignupPopup); // Menyembunyikan popup Signup
  };

  // Handler for closing popup when clicking outside the popup-inner
  const handleOutsideClick = (event) => {
    if (event.target.className === 'popup') {
      toggleLoginPopup();
    }
  };

  return (
    <div>
      {!showSignupPopup && (
        <div className="popup" onClick={handleOutsideClick}>
          <div className="popup-inner">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Username'
                onChange={handleChange}
                value={values.name}
              />
              <input
                type={showPasswordLogin ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Password'
                onChange={handleChange}
                value={values.password}
              />
              <img
                src='/images/mataterbuka.png'
                onClick={togglePasswordVisibilityLogin}
                className="pass-icon"
                alt="Show Password"
              />
              <img
                src='/images/user.png'
                className="pass-icon2"
                alt="User Icon"
              />
              
              <div className='create_account' onClick={handleCreateAccountClick}>
                Create account
              </div>
              
              <button type="submit" className="submit-button">Submit</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      )}

      {showSignupPopup && <Signup toggleSignupPopup={toggleSignupPopup} />}
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Pastikan ini diimpor jika menggunakan React Router
import './Home.css';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';

const Home = () => {
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
      <Navbar />
      <div className='Home'>
        <div className="lingkaran1" />
        <div className="lingkaran2" />
        <div className="lingkaran3" />

        <button onClick={toggleSignupPopup} className="signup">Sign up</button>
        <button onClick={toggleLoginPopup} className="login">Log in</button>
        
        <div className='slogan'>
          Let's Create
          <p className="slogan1">Your</p>
          <p className="slogan2">Own Style</p>
          <p className="tagline">Unleash your creativity, explore new possibilities</p>
          <button className="button">Get Started</button>
        </div>

        <div className="service">
          <h2>Our Services</h2>
          <p>With a variety of options to choose from, 
            our services are carefully designed to meet 
            customer needs and enhance their design experience</p>
        </div>

        <img
          src='/images/baju.png'
          className="baju"
          alt="baju"
        />

        <div className='kotak1' />
        <div className='kotak2' />
        <div className='kotak3' />
        <div className='trapesium' />
        <div className='kotak4' />
        <div className='kotak5' />
        <div className='kotak6' />
        <div className='kotak7' />

        <img
          src='/images/custom.png'
          className="custom"
          alt="custom"
        />

        <img
          src='/images/taylor.png'
          className="taylor"
          alt="taylor"
        />

        <img
          src='/images/star.png'
          className="star"
          alt="star"
        />

        <div className='teks_custom'>Customization</div>
        <div className='teks_star'>Inspiration</div>
        <div className='teks_taylor'>Tailor's recommendation</div>

        <div className='teks_custom_content'>You can customize your style 
          <p>with customization features that</p> 
          <p>use 3D technology</p></div>

        <div className='teks_star_content'>You can find a variety of fashion 
          <p>inspirations here</p></div>

        <div className='teks_taylor_content'>Consult your design results and 
          <p>wait for the tailor to realize your</p> 
          <p>dream style</p></div>

        <div className='teks_feel'>feel a new experience 
          <p>that you have never tried</p>
          <p>before</p></div>

        <img
          src='/src/assets/logo padupadan.png'
          className="footer"
          alt="footer"
        />

        <div className='footer_logoteks'>Padupadan</div>
        <div className='nav_footer'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/inspiration'>Inspiration</Link></li>
            <li><Link to='/custom'>Customization</Link></li>
          </ul> 
        </div>

        <div className='copyright'>@copyright 2024</div>

        {showSignupPopup && <div className="blur-background" />}
        {showSignupPopup && <Signup toggleSignupPopup={toggleSignupPopup} />}

        {showLoginPopup && <div className="blur-background" />}
        {showLoginPopup && <Login toggleLoginPopup={toggleLoginPopup} />}
      </div>
    </>
  );
}

export default Home;

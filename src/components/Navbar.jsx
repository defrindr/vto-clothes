import React from 'react';
import './Navbar.css';
import logo from '../assets/logo padupadan.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img src={logo} alt="" className='logo'/>
        <span className='logo-text'>Padupadan</span>
      </div>
      <ul className='nav-links'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/inspiration'><li>Inspiration</li></Link>
        <Link to='/custom'><li>Customization</li></Link>
      </ul> 
    </div>
  )
}

export default Navbar;

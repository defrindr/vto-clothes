import React from 'react';
import './Inspiration.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Inspiration = () => {
  return (
    <>
      <Navbar />
      <div className='inspiration'>
        <div className='cari'/>
        <div className='lingkaran4'/>
        <div className='lingkaran5'/>
        <div className='page1'/>
        <div className='page2'/>
        <div className='page3'/>
        <div className='page4'/>
        <div className='page5'/>
        <div className='page6'/>
        <div className='page7'/>
        <div className='page8'/>
        <div className='page9'/>
        <div className='page10'/>
        <div className='page11'/>
        <div className='page12'/>
      </div>

      <div className='kotakbawah' />

      <img
          src='/src/assets/logo padupadan.png'
          className="footer1"
          alt="footer"
        />

        <div className='footer_logoteks1'>Padupadan</div>
        <div className='nav_footer1'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/inspiration'>Inspiration</Link></li>
            <li><Link to='/custom'>Customization</Link></li>
          </ul> 
        </div>

        <div className='copyright1'>@copyright 2024</div>



    </>
  );
};

export default Inspiration;

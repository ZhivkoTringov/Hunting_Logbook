import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import logo from '../../assets/Hunting.png'
import './navbar.css';

const Navbar = () => {
  return (
    <div className='hl__navbar'>
      <div className='hl__navbar-links'>
        <div className='hl__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='hl__navbar-links_container'>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#home">Clubs</a>
          </p>
          <p>
            <a href="#home">Individuals</a>
          </p>
          <p>
            <a href="#home">News</a>
          </p>
          <p>
            <a href="#home">About</a>
          </p>
        </div>
      </div>
      <div className='hl__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
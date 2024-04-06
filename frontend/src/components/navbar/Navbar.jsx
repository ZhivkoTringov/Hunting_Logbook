import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/Hunting.png'
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#home">Clubs</a></p>
  <p><a href="#home">Individuals</a></p>
  <p><a href="#home">News</a></p>
  <p><a href="#home">About</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='hl__navbar'>
      <div className='hl__navbar-links'>
        <div className='hl__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='hl__navbar-links_container'>
        <Menu />
        </div>
      </div>
      <div className='hl__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='hl__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='hl__navbar-menu_container scale-up-center'>
            <div className='hl__navbar-menu_container'>
              <Menu />
              <div className='hl__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
            
        )}
      </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header>
      <nav className='navbarim'>
        <div className="logo">
          <NavLink to='/' onClick={closeMenu}>
            <img alt="logo" src="/images/recycle.png" />
          </NavLink>
        </div>
        
        <div className={`nav-mid ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to='/' style={({ isActive }) => ({ color: isActive ? '#083F75' : 'grey' })} onClick={closeMenu}>Home</NavLink>
          <a href="/#feature" onClick={closeMenu}>Learn</a>
          <NavLink to='/recycleai' style={({ isActive }) => ({ color: isActive ? '#083F75' : 'grey' })} onClick={closeMenu}>RecycleAI</NavLink>
          <NavLink to='/contact' style={({ isActive }) => ({ color: isActive ? '#083F75' : 'grey' })} onClick={closeMenu}>Contact</NavLink>
        </div>

        <div className="nav-r">
          <button className="menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </nav>
 
    </header>
  )
}

export default Navbar

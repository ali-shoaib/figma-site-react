import React from 'react'
import logo from '../../assets/logo.png';
import ellipse from '../../assets/ellipse.png';
import './navbar.css';

const Menu = () => {
  return(
    <>
      <p className='nav_menus'><a href="#home">Home</a></p>
      <p className='nav_menus'><a href="#possibility">Destinations</a></p>
      <p className='nav_menus'><a href="#features">About</a></p>
      <p className='nav_menus'><a href="#blog">Partner</a></p>
    </>
  )
}

const Navbar = () => {
  return (
    <nav>
      <div className="d-flex justify-content-between mt-4">
        <div className="navbar_links_logo">
          <img src={ellipse} alt="ellipse" />
          <img src={logo} alt="logo" className='orange_logo'/>
        </div>
        <div className="d-flex align-items-center">
          <Menu />
          <button className="btn_login">Login</button>
          <button className="btn_register">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

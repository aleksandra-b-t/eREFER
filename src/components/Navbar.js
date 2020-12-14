import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul className='nav-menu'>
              <Link to='/sign-up' className='nav-links'>
                Sign Up
              </Link>
              <Link to='/sign-up' className='nav-links'>
                Sign In
              </Link>
          </ul> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;
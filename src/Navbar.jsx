import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
function Navbar() {
  const [isOpen,setIsOpen]=useState(false);
  const toggleMenu =()=>{
    setIsOpen(!isOpen);
  };
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src='../src/assets/color-pallete.png'></img><h1>Logendiran's Gallery</h1>
      </div>
        <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </div>
        <ul  className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to='/' onClick={()=>setIsOpen(false)}>Home</Link></li>
            <li><Link to='/artwork' onClick={()=>setIsOpen(false)}>Gallery</Link></li>
            <li><Link to='/about' onClick={()=>setIsOpen(false)}>About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar

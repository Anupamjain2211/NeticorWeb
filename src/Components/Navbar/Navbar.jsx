import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo01.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo' alt='Logo' />
      <div className='menu-icon' onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About us</Link></li>
        <li><Link to='blog' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Blog</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn1' onClick={toggleMenu}>Contact us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

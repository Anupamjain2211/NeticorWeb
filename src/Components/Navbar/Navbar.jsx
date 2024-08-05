import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className='logo'/>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='blog' smooth={true} offset={-260} duration={500}>Blog</Link></li>
        <li><Link to='testinomials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}className='btn'>Contact us</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar

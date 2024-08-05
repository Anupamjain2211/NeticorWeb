import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Testimonials from './Components/Testinimonials/Testinimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className=''>
        <Title subTitle = "Our Services" title = "Services Provided by Neticor"/>
      <Programs />
      <About/>
      <Title subTitle = "Gallery" title = "Neticor Blog"/>
      <Blog/>
      <Title subTitle = "Testimonials" title = "What Partner Says"/>
      <Testimonials/>
      <Title subTitle = "Contact Us" title = "Get in Touch"/>
      <Contact/>
      <Footer/>





      </div>
    </div>
  )
}

export default App

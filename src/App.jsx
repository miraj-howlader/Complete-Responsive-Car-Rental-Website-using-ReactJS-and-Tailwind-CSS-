import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aos from 'aos'
import 'aos/dist/aos.css'
import About from './components/About'
import Services from './components/Services'
import CartList from './components/CartList'
import Testimonials from './components/Testimonials'
import AppStore from './components/AppStore'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : "light"
)

useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}, [theme])


// AOS INITIalization 
useEffect(() => {
  Aos.init({
    offset:100,
    duration:800,
    easing:'ease-in-sine',
    delay:100,
  })
  Aos.refresh()
}, [])


  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <About/>
      <Services/>
      <CartList/>
      <Testimonials/>
      <AppStore/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'

import CarPng from '../assets/car1.png'
const About = () => {
  return (
    <div className=' dark:bg-dark dark:text-white bg-slate-200
     duration-300 sm:min-h-[600px]  sm:grid
      sm:place-items-center' id='about'>
      <div className=' container'>
         <div className=' grid grid-cols-1 sm:grid-cols-2 place-items-center'>
            <div
            data-aos='slide-right'
            data-aos-duration='1500'
            
            >
                <img src={CarPng} alt="" 
                className=' sm:scale-105 sm:translate-x-11'/>
            </div>
            <div className=' space-y-5 sm:p-16 pb-6'>
                <h1
                data-aos='fade-up'
                 className=' text-3xl sm:text-4xl font-bold
                 font-serif'>About us</h1>
                 <p
                 data-aos='fade-left'
                 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquid tempora numquam quos doloremque perspiciatis nulla necessitatibus tempore, incidunt eius.</p>
                 <p 
                 data-aos='fade-up'
                 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt?</p>
                 <div>
                <button
                data-aos='fade-up'
                 className=' button-outline'>Order Now</button>
            </div>
            </div>
           
         </div>
      </div>
    </div>
  )
}

export default About

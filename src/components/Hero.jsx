import React, { useState } from 'react'

import CarPng from '../assets/car.png'
import YellowPng from '../assets/banner-car.png'
const Hero = ({theme}) => {
    
  return (
    <div className='dark:bg-gray-900 dark:text-white duration-300 relative
     -z-20'>
      <div className=' container min-h-[620px] flex'>
       <div className=' grid grid-cols-1 sm:grid-cols-2
        place-items-center'>
       <div
       data-aos='zoom-in'
       data-aos-duration='1500'
        className=' order-1 sm:order-2'>
            <img
            className=' relative -z-10 max-h-[600px] sm:scale-125
             drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'
             src={theme === 'dark'? CarPng:YellowPng} alt="" />
        </div>
        <div
         data-aos='fade-up'
         data-aos-duration='600'
         className=' order-2 sm:order-1 space-y-4'>
            <p className=' text-primary text-2xl
             font-serif'>Effortless</p>
            <h1
            data-aos='fade-up'
           data-aos-delay='600'
             className=' text-5xl lg:text-7xl font-semibold
             font-serif mt-2'>Car Rental</h1>
            <p
            data-aos='fade-up'
            >Lorem ipsum dolor sit amet, adipisicing elit. Laboriosam totam veritatis minima tempora cum corrupti velit, necessitatibus neque!</p>
        <button
        data-aos='fade-left'
         data-aos-delay='600'
         className=' btn bg-primary text-black
         px-6 py-2 rounded-md hover:bg-primary/80
          duration-300'>Get Started</button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Hero

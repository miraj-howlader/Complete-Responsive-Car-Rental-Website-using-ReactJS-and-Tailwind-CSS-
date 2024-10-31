import React from 'react'

const Contact = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white py-14'>
      <div className="container">
        <div
        data-aos='zoom-in'
         className='  grid grid-cols-1 text-white sm:grid-cols-3 bg-gray-800
         py-8 px-6'>
           <div className=' col-span-2 space-y-3'>
           <h1 className=' text-4xl sm:text-5xl font-bold text-white'> Let's collaborate on your upcomming car rental
                venture
            </h1>
            <p className=' text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea sunt facilis similique, fuga maxime!</p>
           </div>
           <div className=' grid place-items-center'>
            <a href="#" className=' inline-block font-semibold
             py-2 px-6 bg-primary text-white rounded-lg
              tracking-wider uppercase hover:bg-primary/50
               transition-all duration-300'>Contact Us</a>
           </div>

        </div>
      </div>
    </div>
  )
}

export default Contact

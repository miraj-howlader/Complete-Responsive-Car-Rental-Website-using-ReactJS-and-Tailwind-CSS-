import React from 'react'
import { FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { NavLinks } from './Navbar'
const Footer = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white mt-14
     rounded-t-3xl'>
        <div
        data-aos='zoom-in'
         className=' container'>
            <div className=' grid md:grid-cols-3 py-5 '>
              {/* Company Details  */}
              <div className='py-8 px-4 space-y-2'>
                <h1 className=' text-xl sm:text-3xl font-bold sm:text-left
                 text-justify mb-3'>Car Rental</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima maiores quae explicabo dolores?</p>
              <br />
              <div className='flex space-x-3'>
                <FaLocationArrow className='text-2xl'/>
                <p>Noida,Uttar Pradesh</p>
              </div>
              <div className='flex space-x-3'>
                <FaMobileAlt className='text-2xl'/>
                <p>++433 57654 3423</p>
              </div>
              {/* Social icons  */}
              <div className=' flex items-center gap-4 '>
                <a href="#"><FaInstagram className=' text-3xl hover:text-primary
                 duration-300'/></a>
                <a href="#"><FaFacebook className=' text-3xl hover:text-primary
                 duration-300'/></a>
                <a href="#"><FaLinkedin className=' text-3xl hover:text-primary
                 duration-300'/></a>
              </div>
              </div>
              {/* link section  */}
              <div className=' grid grid-cols-2 sm:grid-cols-3
               col-span-2 md:pl-10 '>
                {/* first col  */}
                 <div>
                    <div className=' py-8 px-4'>
                        <h1 className=' text-xl  font-bold
                         sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className=' flex flex-col gap-3'>
                            {
                                NavLinks.map((item)=>(
                                    <li key={item.id}
                                    className=' cursor-pointer hover:text-primary
                                     duration-300'
                                    >
                                        <span className=' mr-2'>&#11162;</span>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                 </div>
                 {/* second col  */}
                 <div>
                    <div className=' py-8 px-4'>
                        <h1 className=' text-xl  font-bold
                         sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className=' flex flex-col gap-3'>
                            {
                                NavLinks.map((item)=>(
                                    <li key={item.id}
                                    className=' cursor-pointer hover:text-primary
                                     duration-300'
                                    >
                                        <span className=' mr-2'>&#11162;</span>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                 </div>
                 {/* Third cosl  */}
                 <div>
                    <div className=' py-8 px-4'>
                        <h1 className=' text-xl  font-bold
                         sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className=' flex flex-col gap-3'>
                            {
                                NavLinks.map((item)=>(
                                    <li key={item.id}
                                    className=' cursor-pointer hover:text-primary
                                     duration-300'
                                    >
                                        <span className=' mr-2'>&#11162;</span>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                 </div>
              </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer

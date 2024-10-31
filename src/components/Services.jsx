import React from 'react'
import { FaCameraRetro, FaDashcube, FaDochub } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'

const SkillData = [
    {
        id:1,
        name:"Best Price",
        icons:<FaCameraRetro className=' text-5xl text-primary
         group-hover:text-black duration-300'/>,
        link:'#',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae in saepe aliquid!',
        aosDelay:0
    },

    {
        id:2,
        name:"Fast and Safe",
        icons:<GiNotebook className=' text-5xl text-primary
         group-hover:text-black duration-300'/>,
        link:'#',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae in saepe aliquid!',
        aosDelay:'200'
    },

    {
        id:3,
        name:"Experience",
        icons:<SlNote className=' text-5xl text-primary
         group-hover:text-black duration-300'/>,
        link:'#',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae in saepe aliquid!',
        aosDelay:'100'
    },
]
const Services = () => {
  return (
    <div className=' py-14 dark:bg-gray-900 dark:text-white
     sm:min-h-[600px] sm:grid sm:place-content-center' id='booking'>
        <div className="container">
            <div className=' pb-12'>
                <h1
                data-aos='fade-right'
                 className=' text-3xl font-semibold
                 text-center font-serif sm:text-4xl'>Why Choose Us</h1>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2
             md:grid-cols-3 gap-4'>
              {
                SkillData.map((item)=>(
                    <div
                    key={item.id}
                    data-aos='fade-up'
                    data-aos-delay={item.aosDelay}
                    className=' card text-center group
                     space-y-3 sm:space-y-6 p-4 sm:py-16
                      bg-dark hover:bg-primary duration-600
                       text-white hover:text-black
                        rounded-lg'
                    >
                        <div className=' flex justify-center text-center items-center'>{item.icons}</div>
                        <h1 className=' text-2xl'>{item.name}</h1>
                        <p className=' text-gray-400 mt-3'>{item.desc}</p>
                        <a href={item.link}
                         className=' space-y-3 text-primary'>Learn More...</a>
                    </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Services

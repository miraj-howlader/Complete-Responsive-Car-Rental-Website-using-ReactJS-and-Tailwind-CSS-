import React, { useState } from 'react'
import DarkMode from './DarkMode'
import MobileNav from './MobileNav'
import { RxCross2 } from 'react-icons/rx'
import { MdMenu } from 'react-icons/md'

export const NavLinks = [
    {
        id:1,
        name:"Home",
        link:'/'
    },
    {
        id:2,
        name:"Car",
        link:'/#car'
    },
    {
        id:3,
        name:"About",
        link:'/#about'
    },
    {
        id:4,
        name:"Booking",
        link:'/#booking'
    },
]
const Navbar = ({theme,setTheme}) => {
    const [showMenu,setShowMene] = useState(false);

    const toggelMenu = () => {
        setShowMene(!showMenu)
    }
  return (
    <nav className=' shadow-md dark:bg-gray-900 dark:text-white'>
        <div className=' container '>
            <div className='flex justify-between items-center py-3 '>
               <div>
                <h1 className=' font-serif text-xl font-bold'>
                    Car Rental
                </h1>
               </div>
               <div className=' hidden sm:block '>
                <ul className=' flex items-center gap-6 '>
                    {NavLinks.map((item)=>(
                        <li key={item.id} className=''>
                            <a 
                            className=' inline-block py-2
                             uppercase hover:border-b-2 hover:text-primary
                              hover:border-primary 
                               duration-500 text-lg font-semibold'
                            href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
               </div>
               <DarkMode
               theme={theme}
               setTheme={setTheme}
               />
               <div className=' lg:hidden'>
                {
                    showMenu ? <RxCross2 className=' text-2xl cursor-pointer'
                     onClick={toggelMenu}/>:
                    <MdMenu className=' text-2xl cursor-pointer'
                     onClick={toggelMenu}/>
                }
               </div>
            </div>

        </div>
        <MobileNav
        showMenu={showMenu}
        toggelMenu={toggelMenu}
        />
    </nav>
  )
}

export default Navbar

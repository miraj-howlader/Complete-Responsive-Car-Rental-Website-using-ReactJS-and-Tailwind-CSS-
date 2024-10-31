import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLinks } from './Navbar'

const MobileNav = ({showMenu,toggelMenu}) => {
  return showMenu &&  (
    <div className=' fixed py-14 top-0 z-50 bg-white dark:bg-gray-900
     h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col
      justify-between px-8 pb-6 pt-16 transition-all duration-500'>
      <div className=' card'>
        <div className='flex items-center justify-start gap-3'>
            <FaUserCircle size={50}/>
            <div>
                <h1>Hello User</h1>
                <h1>Premium user</h1>
                
            </div>
            
        </div>
        <hr className=' text-gray-600 mt-3'/>
        <div>
            <ul className=' py-8 text-center space-y-6'>
                {
                    NavLinks.map((item)=>(
                        <li key={item.id}
                        className=' hover:text-primary
                         transition-all duration-300'
                        >
                            <a
                            className=' uppercase'
                             href={item.link}>{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
        

      </div>
      <hr className=' mt-[154px] bg-gray-500'/>
      <p className=' text-center'>Made with 💔 by Miraj Howlader</p>
    </div>
  )
}

export default MobileNav

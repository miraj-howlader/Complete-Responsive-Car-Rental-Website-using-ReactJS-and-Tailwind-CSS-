import React, { useEffect, useState } from 'react'
import { GoMoon } from "react-icons/go";
import { IoIosSunny } from "react-icons/io";
const DarkMode = ({theme,setTheme}) => {
   
    return (
        <div>
            {
                theme === 'dark' ? 
                <IoIosSunny className=' text-3xl cursor-pointer' onClick={() => setTheme('light')} /> :
                <GoMoon className=' text-3xl cursor-pointer' onClick={() => setTheme('dark')} />
            }
        </div>
    )
}

export default DarkMode

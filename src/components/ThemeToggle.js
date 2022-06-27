import React, {useContext} from 'react'
import {HiSun, HiMoon} from 'react-icons/hi' 
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

    return (
    <div>
        {theme === 'dark' ? (
            <div><HiSun/>Light Mode</div>
        ) : ( <div><HiMoon/>Dark Mode</div>)}
   
   </div>
  )
}

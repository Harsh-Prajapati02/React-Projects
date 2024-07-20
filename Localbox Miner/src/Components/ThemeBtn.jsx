import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdSunny } from "react-icons/md";
import { ThemeContext } from '../Context/ThemeContext';
import { IoMdMoon } from "react-icons/io";

const ThemeBtn = () => {

  const { theme, themeUpdaterFunction } = useContext(ThemeContext)

  return (
    <div className='d-flex justify-content-end align-items-center mb-2'>
      <button onClick={themeUpdaterFunction} style={{ backgroundColor: theme == "light" ? "white" : "#0f111a", color: theme == "light" ? "black" : "white", border: theme == "light" ? "2px solid lightgray" : "2px solid black" }} className='theme-btn me-2'>{theme == "light" ? <IoMdMoon /> : <MdSunny />}</button>
      <h4 style={{fontSize:"20px", fontWeight:"700"}} className='mb-0'>Toggle Theme</h4>
    </div>
  )
}

export default ThemeBtn
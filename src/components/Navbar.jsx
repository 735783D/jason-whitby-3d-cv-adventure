import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/jason-whitby-3d-cv-adventure" className="w-10 h-10 rounded-lg bg-transparent items-center 
        justify-center flex font-bold shadow-md">
            <p className='red-gradient_text'>JJW</p>
        </NavLink>

        <nav className="flex lg:text-xl text-xxs lg:gap-7 gap-3 font-medium">
            <NavLink to="/jason-whitby-3d-cv-adventure/about" className={({isActive}) => isActive ? "text-white" : "text-red-600"}>About</NavLink>
            <NavLink to="/jason-whitby-3d-cv-adventure/knowledge" className={({isActive}) => isActive ? "text-white" : "text-red-600"}>Knowledge</NavLink>
            <NavLink to="/jason-whitby-3d-cv-adventure/projects" className={({isActive}) => isActive ? "text-white" : "text-red-600"}>Projects</NavLink>
            <NavLink to="/jason-whitby-3d-cv-adventure/contact" className={({isActive}) => isActive ? "text-white" : "text-red-600"}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
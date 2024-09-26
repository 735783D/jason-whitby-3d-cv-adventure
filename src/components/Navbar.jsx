import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/jason-whitby-3d-cv-adventure" className="w-10 h-10 rounded-lg bg-transparent items-center 
        justify-center flex font-bold shadow-md">
            <p className='black-gradient_text'>JJW</p>
        </NavLink>

        <nav className="flex text-sm gap-7 font-medium">
            <NavLink to="/jason-whitby-3d-cv-adventure" className={({isActive}) => isActive ? "text-blue-500" : "text-black"}>Home</NavLink>
            <NavLink to="/jason-whitby-3d-cv-adventure/about" className={({isActive}) => isActive ? "text-blue-500" : "text-black"}>About</NavLink>
            <NavLink to="/jason-whitby-3d-cv-adventure/projects" className={({isActive}) => isActive ? "text-blue-500" : "text-black"}>Projects</NavLink>
            <NavLink to="/jason-whitby-3d-cv-adventure/contact" className={({isActive}) => isActive ? "text-blue-500" : "text-black"}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar
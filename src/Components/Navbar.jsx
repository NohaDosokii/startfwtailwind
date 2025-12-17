import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-seccolor text-white px-2.5 py-2.5 rounded-lg font-bold"
      : "text-white font-bold px-4 py-2"

  return (
    <nav
      className={`
          relative lg:fixed top-0 left-0 w-full z-50
        bg-maincolor text-white
        transition-all duration-300
        ${scrolled ? 'py-3 shadow-lg' : 'py-8'}
      `}
    >
      <div className="container px-0">
        <div className="flex justify-between items-center">

          <h2 className="text-[32px] font-bold ml-1 lg:ml-19">
            <NavLink to="/">START FRAMEWORK</NavLink>
          </h2>

          <ul className="hidden lg:flex gap-2 text-base font-bold mr-20">
            <li><NavLink to="/about" className={linkClasses}>ABOUT</NavLink></li>
            <li><NavLink to="/portfolio" className={linkClasses}>PORTFOLIO</NavLink></li>
            <li><NavLink to="/contacts" className={linkClasses}>CONTACT</NavLink></li>
          </ul>

          <svg
            onClick={() => setIsOpen(!isOpen)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 cursor-pointer lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>

        {isOpen && (
          <ul className="lg:hidden mt-6 flex flex-col gap-4 items-start text-left">
            <li><NavLink to="/about" className={linkClasses}>ABOUT</NavLink></li>
            <li><NavLink to="/portfolio" className={linkClasses}>PORTFOLIO</NavLink></li>
            <li><NavLink to="/contacts" className={linkClasses}>CONTACT</NavLink></li>
          </ul>
        )}
      </div>
    </nav>
  )
}

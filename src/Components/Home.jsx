import logo from '../assets/avataaars.svg'
import React from 'react'

export default function Home() {
  return <>
    <div className="bg-seccolor h-[80vh] flex flex-col justify-center -mt-1 items-center text-center">
      <img className='w-1/2 h-1/2' src={logo} alt="logo" />
      <h1 className="text-white text-[40px] font-bold mt-9">START FRAMEWORK</h1>

      <div className="flex items-center justify-center mt-3 gap-4">
        <span className="w-20 h-1 bg-white inline-block"></span>
        <i className="fa-solid fa-star text-white"></i>
        <span className="w-20 h-1 bg-white inline-block"></span>
      </div>

      <p className="text-white mt-4">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </>
}
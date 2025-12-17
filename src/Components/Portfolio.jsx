import React, { useState } from 'react'
import logo from '../assets/poert1.png'
import logo2 from '../assets/port2.png'
import logo3 from '../assets/port3.png'

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (img) => {
    setSelectedImg(img);
  };

  const handleClose = () => {
    setSelectedImg(null);
  };

  return (
    <>
      <div className="py-2 flex flex-col items-center">
        <h1 className="mt-1 font-bold text-[40px] text-maincolor">PORTFOLIO COMPONENT</h1>

        <div className="flex items-center justify-center gap-4 mt-2.5">
          <span className="w-20 h-1 bg-maincolor"></span>
          <i className="fa-solid fa-star text-maincolor "></i>
          <span className="w-20 h-1 bg-maincolor"></span>
        </div>

        <div className="container mx-auto px-18 mt-4">
          <div className="flex flex-wrap -mx-4">
            {[logo, logo2, logo3, logo, logo2, logo3].map((img, index) => (
              <div className="w-full md:w-1/3 px-5 mb-11" key={index}>
                <div 
                  className="relative w-full h-62.5 overflow-hidden rounded-lg group cursor-pointer"
                  onClick={() => handleOpen(img)}
                >
                  <img 
                    className="w-85 h-full object-cover rounded-lg" 
                    src={img} 
                    alt="" 
                  />
                  
                  <div className="absolute inset-0 w-85 h-full rounded-lg bg-seccolor bg-opacity-90 
                  flex items-center justify-center opacity-0 group-hover:opacity-90 transition-all duration-700">
                    <i className="fa-solid fa-plus text-white text-6xl md:text-7xl lg:text-8xl"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  {selectedImg && (
  <div 
    className="fixed inset-0 w-full h-full bg-[rgba(25,55,192,0.3)] flex justify-center items-center z-50"
    onClick={handleClose}
  >
    <div className="relative">
      <img
        src={selectedImg}
        className="w-full md:w-125 lg:w-150 max-h-[80vh] object-contain"
        alt=""
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </div>
)}

    </>
  )
}
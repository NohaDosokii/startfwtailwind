


import React from 'react'

export default function About() {
  return (
    <div 
      className="min-h-[80vh] bg-seccolor py-20 flex flex-col items-center ">
      <h1 className="text-white text-[40px] font-bold mt-18">ABOUT COMPONENT</h1>

      <div className="flex items-center justify-center gap-4 mt-2.5">
        <span className="w-20 h-1 bg-white"></span>
        <i className="fa-solid fa-star text-white"></i>
        <span className="w-20 h-1 bg-white"></span>
      </div>

      <div className="flex flex-wrap mt-0 w-3/4">
        <div className="w-full md:w-1/2 p-4">
          <p className="text-white">
            Freelancer is a free bootstrap theme created by Route. The download includes
            the complete source files including HTML,<br/> CSS, and JavaScript as well as
            optional SASS stylesheets for easy customization.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <p className="text-white">
            Freelancer is a free bootstrap theme created by Route. The download includes
            the complete source files including HTML,<br/> CSS, and JavaScript as well as
            optional SASS stylesheets for easy customization.
          </p>
        </div>
      </div>
    </div>
  )
}
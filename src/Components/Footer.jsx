import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-maincolor text-white pt-25 ">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-36 mx-auto mb-24">
        <div className="text-center ml-0 sm:ml-28">
          <h4 className="text-[28px] font-medium mb-2">LOCATION</h4>
          <p>2215 John Daniel Drive</p>
          <p className='mt-4'>Clark, MO 65243</p>
        </div>

        <div className="text-center">
          <h4 className="text-[28px] font-medium md:ml-16 mb-2">AROUND THE WEB</h4>
          <div className="flex justify-center space-x-2.5 md:ml-14">
            <a href="#" className="flex items-center justify-center w-9 h-9 border border-white rounded-full transition-colors duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="flex items-center justify-center w-9 h-9 border border-white rounded-full transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="flex items-center justify-center w-9 h-9 border border-white rounded-full transition-colors duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="flex items-center justify-center w-9 h-9 border border-white rounded-full transition-colors duration-300">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-[28px] font-medium mb-1">ABOUT FREELANCER</h4>
          <p className="max-w-125 text-center">
            <span className="block">
              Freelance is a free to use, licensed Bootstrap theme
            </span>
            <span className="block">
              created by Route
            </span>
          </p>
        </div>
      </div>

      <div className="bg-[#19222c] w-full py-4">
        <div className="flex justify-center items-center mt-1">
          <p className="text-center">Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  );
}
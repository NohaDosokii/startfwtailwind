

import React from "react";

export default function Contacts() {
  return (
    <div className="py-8 flex flex-col items-center">
      <h1 className="-mt-2 font-bold text-[40px] text-maincolor">CONTACT SECTION</h1>

      <div className="flex items-center justify-center gap-4 mt-2.5">
        <span className="w-20 h-1 bg-maincolor"></span>
        <i className="fa-solid fa-star text-maincolor"></i>
        <span className="w-20 h-1 bg-maincolor"></span>
      </div>

      <form className="w-1/2 mt-24 flex flex-col gap-6">
        {[
          { id: "userName", type: "text", label: "userName" },
          { id: "userAge", type: "text", label: "userAge" },
          { id: "userEmail", type: "email", label: "userEmail" },
          { id: "userPassword", type: "password", label: "userPassword" },
        ].map((field) => (
          <div className="relative w-full" key={field.id}>
            <input
              type={field.type}
              id={field.id}
              placeholder=" "
              className="peer w-full px-3 py-3 text-base border-2 border-white border-b
               border-b-[#e2e0e0] outline-none bg-transparent mb-4 rounded-xl shadow-[0_0_0_3px_white]
               focus:border-b-[#e2e0e0] text-[#595c5f]"
            />
            <label
              htmlFor={field.id}
              className="absolute left-3 top-3 text-[#595c5f] text-base pointer-events-none
               transition-all duration-300
               peer-[:not(:placeholder-shown)]:-top-7 
               peer-[:not(:placeholder-shown)]:text-seccolor 
               peer-[:not(:placeholder-shown)]:text-base 
               peer-[:not(:placeholder-shown)]:after:content-[':'] 
               peer-[:not(:placeholder-shown)]:after:ml-0.5"
            >
              {field.label}
            </label>
          </div>
        ))}

        <button
          type="submit"
          className="px-4 py-2 bg-seccolor text-white border-none rounded-md cursor-pointer
           text-base self-start transition-transform duration-100 active:scale-95 hover:opacity-90"
        >
          send Message
        </button>
      </form>
    </div>
  );
}
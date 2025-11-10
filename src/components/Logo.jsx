import React from 'react'
import logo from "../assets/elanzalogo-removebg-preview.png"; 


const Logo = () => {
  return (
     <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Elanza Logo"
          className="h-10 w-10 rounded-full object-cover border border-[#8F7023]/40"
        />
        <h1 className="text-xl text-[#8F7023] tracking-wide brand-name"
          style={{ fontFamily: "'Pacifico', cursive" }}
>
          ELANZA
        </h1>
      </div>
  )
}

export default Logo
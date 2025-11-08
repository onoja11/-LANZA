import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/elanza2.jpeg"; 

const Hero = () => {
  return (
    <div
      className="relative  bg-cover bg-center bg-no-repeat overflow-hidden"
    //   style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <h1 className="fade-in text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-5xl xl:text-6xl">
                <span className="block pt-14 lg:pt-0 text-[#8F7023] font-bold">
                  Born in Nigeria
                </span>
                <span className="block text-[#8F7023]">Inspired by Africa</span>
                <span className="block text-[#8F7023]">Designed for the World</span>
              </h1>

              <p className="fade-in mt-3 text-base text-[#8F7023] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Welcome to ELANZA — where creativity, commerce, and culture merge
                to form a new standard for how fashion is experienced worldwide.
              </p>

              <div className="fade-in mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <Link
                    to="/caps"
                    className="w-full flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#8F7023] hover:bg-[#a97b2a] transition duration-300 md:py-4 md:text-lg md:px-24"
                  >
                    Shop Now
                  </Link>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/caps"
                    className="w-full flex items-center justify-center px-9 py-3 border border-[#8F7023] text-base font-medium rounded-full text-[#8F7023] hover:bg-[#8F7023] hover:text-white transition duration-300 md:py-4 md:text-lg md:px-24"
                  >
                    Collections
                  </Link>
                </div>
              </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Menu } from "lucide-react";
import logo from "../assets/elanzalogo.jpg"; // ✅ remove the curly braces

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#8F7023]/30 px-6 py-3 flex items-center justify-between">
      {/* Left Section - Logo + Name */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Elanza Logo"
          className="h-10 w-10 rounded-full object-cover border border-[#8F7023]/40"
        />
        <h1 className="text-xl font-bold text-[#8F7023] tracking-wide">
          ELANZA
        </h1>
      </div>

      {/* Right Section - Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        className="text-[#8F7023] hover:text-[#a97b2a] transition"
      >
        <Menu size={28} />
      </button>
    </nav>
  );
};

export default Navbar;

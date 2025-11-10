import React from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";


const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#8F7023]/30 px-6 py-3 flex items-center justify-between">
      {/* Left Section - Logo + Name */}
     
      <Logo/>
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

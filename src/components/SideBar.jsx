import React from "react";
import {
  X,
  Home,
  Users,
  ShoppingBag,
  Compass,
  MessageSquare,
  Briefcase,
  Info,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Creators", path: "/creators", icon: <Users size={18} /> },
    { name: "Marketplace", path: "/marketplace", icon: <ShoppingBag size={18} /> },
    { name: "Explore", path: "/explore", icon: <Compass size={18} /> },
    { name: "Community", path: "/community", icon: <MessageSquare size={18} /> },
    { name: "For Brands", path: "/brands", icon: <Briefcase size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
    { name: "My Account", path: "/account", icon: <User size={18} /> },
  ];

  return (
    <>
      {/* Overlay (for mobile) */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-80 bg-white border-r border-[#8F7023]/20 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#8F7023]/20">
          <h2 className="text-lg font-semibold text-[#8F7023] tracking-wider">
            <Logo/>
            </h2>
          <button className="text-[#8F7023] lg:hidden" onClick={closeSidebar}>
            <X size={20} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 text-[#8F7023] hover:bg-[#8F7023]/10 transition-all ${
                  isActive ? "bg-[#8F7023]/20 border-l-4 border-[#8F7023]" : ""
                }`
              }
            >
              {item.icon}
              <div className="flex flex-col">
                <span className="font-medium">{item.name}</span>
                <span className="text-xs text-[#8F7023]/70 mt-0.5">
                  {item.name === "Home"
                    ? "The landing page of ÉLANZA"
                    : `Explore ${item.name}`}
                </span>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Fixed Join Button */}
        <div className="p-4 border-t border-[#8F7023]/20">
          <button className="w-full bg-[#8F7023] text-white py-3 rounded-lg font-semibold hover:bg-[#a97b2a] transition-all duration-300 shadow-md">
            Join the Movement
          </button>
          <p className="text-xs text-[#8F7023]/70 mt-3 text-center">
            © {new Date().getFullYear()} ÉLANZA. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

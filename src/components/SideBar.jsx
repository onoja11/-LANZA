import React from "react";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Creators", path: "/creators" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Explore", path: "/explore" },
    { name: "Community", path: "/community" },
    { name: "For Brands", path: "/brands" },
    { name: "About", path: "/about" },
    { name: "My Account", path: "/account" },
  ];

  return (
    <>
      {/* Overlay (for mobile) */}
      <div
        className={`fixed inset-0 bg-black/20 z-40  transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-50 inset-y-0 right-0 w-80 bg-white border-l side-font border-[#8F7023]/20 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#8F7023]/20">
          <h2 className="text-lg font-semibold text-[#8F7023] tracking-wider">
            MENU
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
                `block px-5 py-3 text-[#8F7023] hover:bg-[#8F7023]/10 transition-all ${
                  isActive
                    ? "bg-[#8F7023]/20 border-l-4 border-[#8F7023]"
                    : ""
                }`
              }
            >
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-[#8F7023]/70 mt-1">
                {item.name === "Home"
                  ? "The landing page of ÉLANZA"
                  : `Explore ${item.name}`}
              </div>
            </NavLink>
          ))}
        </div>

        {/* Fixed Join Button */}
        <div className="p-4 border-t border-[#8F7023]/20">
          <button
            className="w-full bg-[#8F7023] text-white py-3 rounded-lg font-semibold hover:bg-[#a97b2a] transition-all duration-300 shadow-md"
          >
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

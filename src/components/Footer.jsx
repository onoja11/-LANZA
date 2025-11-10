import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#8F7023] text-[#FCF7EC] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ELANZA</h2>
          <p className="text-[#FCF7EC]/80 leading-relaxed">
            Connecting designers, retailers, and fashion lovers across the globe. 
            A community celebrating creativity, diversity, and style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#FCF7EC]/80">
            <li><a href="#" className="hover:text-[#FCF7EC] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#FCF7EC] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#FCF7EC] transition">Designers</a></li>
            <li><a href="#" className="hover:text-[#FCF7EC] transition">Marketplace</a></li>
            <li><a href="#" className="hover:text-[#FCF7EC] transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-[#FCF7EC]/80">
            <li><a href="#" className="hover:text-[#FCF7EC] transition">FAQ</a></li>
            <li><a href="#" className="hover:text-[#FCF7EC] transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FCF7EC] transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#FCF7EC] transition">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-[#FCF7EC]/80 mb-4">
            Join our newsletter to get the latest in fashion trends and community updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full text-[#8F7023] bg-[#FCF7EC] placeholder-[#8F7023]/60 focus:outline-none focus:ring-2 focus:ring-[#FCF7EC]/50 text-sm flex-1"
            />
            <button
              type="submit"
              className="bg-[#FCF7EC] text-[#8F7023] px-6 py-2 rounded-full font-semibold hover:bg-[#FCF7EC]/90 transition-colors whitespace-nowrap"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#FCF7EC]/30 mt-10 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-[#FCF7EC]/80 space-y-4 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} ELANZA. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#FCF7EC] transition">
              <i className="ri-facebook-line text-lg"></i>
            </a>
            <a href="#" className="hover:text-[#FCF7EC] transition">
              <i className="ri-instagram-line text-lg"></i>
            </a>
            <a href="#" className="hover:text-[#FCF7EC] transition">
              <i className="ri-twitter-line text-lg"></i>
            </a>
            <a href="#" className="hover:text-[#FCF7EC] transition">
              <i className="ri-linkedin-line text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

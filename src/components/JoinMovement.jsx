import React from "react";
import { Palette, Store, Heart } from "lucide-react";

const JoinMovement = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(143, 112, 35, 0.9), rgba(143, 112, 35, 0.9)), url('https://readdy.ai/api/search-image?query=Global%20fashion%20community%20coming%20together%2C%20diverse%20group%20of%20fashion%20designers%20and%20creators%20collaborating%2C%20international%20fashion%20workspace%2C%20creative%20energy%20and%20innovation%2C%20modern%20fashion%20studio%20with%20African%20and%20global%20influences%2C%20warm%20golden%20lighting%2C%20professional%20photography%2C%20inspiring%20fashion%20community%20atmosphere&width=1920&height=800')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#FCF7EC] mb-6">
          Join the Movement
        </h2>
        <p className="text-xl md:text-2xl text-[#FCF7EC]/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Be part of the global fashion revolution that celebrates diversity,
          creativity, and cultural heritage. Whether you're a designer,
          retailer, or fashion enthusiast, ÉLANZA is your gateway to the future
          of fashion.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Palette size={28} color="#8F7023" />,
              title: "For Designers",
              desc: "Showcase your creativity to a global audience and connect with retailers worldwide.",
              button: "Start Creating",
            },
            {
              icon: <Store size={28} color="#8F7023" />,
              title: "For Retailers",
              desc: "Discover unique pieces and build partnerships with talented designers from around the world.",
              button: "Explore Wholesale",
            },
            {
              icon: <Heart size={28} color="#8F7023" />,
              title: "For Fashion Lovers",
              desc: "Discover exclusive pieces and be part of a community that celebrates global fashion culture.",
              button: "Shop Now",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#FCF7EC] rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#FCF7EC] mb-4">
                {item.title}
              </h3>
              <p className="text-[#FCF7EC]/80 mb-6">{item.desc}</p>
              <button className="bg-[#FCF7EC] text-[#8F7023] px-6 py-3 rounded-full font-semibold hover:bg-[#FCF7EC]/90 transition-colors whitespace-nowrap">
                {item.button}
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-[#FCF7EC] mb-4">
            Stay Connected
          </h3>
          <p className="text-[#FCF7EC]/80 mb-6">
            Get the latest updates on new collections, featured designers, and
            exclusive events.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4"
            id="newsletter-subscription"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-3 rounded-full text-[#8F7023] placeholder-[#8F7023]/60 bg-[#FCF7EC] focus:outline-none focus:ring-2 focus:ring-[#FCF7EC]/50 text-sm"
            />
            <button
              type="submit"
              className="bg-[#FCF7EC] text-[#8F7023] px-8 py-3 rounded-full font-semibold hover:bg-[#FCF7EC]/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;

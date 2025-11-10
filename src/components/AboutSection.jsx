import React from "react";
import {
  Globe,
  GraduationCap,
  Smartphone,
  Check,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8F7023] mb-6">
            About ELANZA
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            ÉLANZA is more than a platform — it's a movement that bridges
            continents, cultures, and creative minds to redefine the global
            fashion landscape.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-[#8F7023] mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Born in Nigeria, the vibrant heart of African innovation, ÉLANZA
              emerged from a vision to create a borderless fashion ecosystem. We
              celebrate the rich heritage of African design while embracing
              global creativity, connecting designers, retailers, and fashion
              enthusiasts worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform represents the fusion of traditional craftsmanship
              with modern technology, creating opportunities for emerging
              designers to showcase their talent on a global stage while
              preserving cultural authenticity.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Elegant%20contemporary%20African%20dress%20with%20modern%20Ankara%20patterns%2C%20sophisticated%20silhouette%2C%20professional%20fashion%20photography%2C%20model%20wearing%20beautiful%20African-inspired%20dress%2C%20minimalist%20cream%20background%2C%20high-end%20fashion%20styling%2C%20golden%20lighting%2C%20luxury%20fashion%20photography&amp;width=400&amp;height=600&amp;seq=design-1&amp;orientation=portrait"
              alt="ÉLANZA creative team at work"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#8F7023] text-center mb-12">
            Our Strategic Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Globe size={28} color="#FCF7EC" />,
                title: "Global Retailers",
                desc: "Partnering with leading fashion retailers across 50+ countries to bring African-inspired designs to international markets.",
              },
              {
                icon: <GraduationCap size={28} color="#FCF7EC" />,
                title: "Fashion Schools",
                desc: "Collaborating with prestigious fashion institutions to nurture emerging talent and provide educational opportunities.",
              },
              {
                icon: <Smartphone size={28} color="#FCF7EC" />,
                title: "Tech Innovators",
                desc: "Working with cutting-edge technology partners to create immersive digital fashion experiences and virtual showrooms.",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-[#FCF7EC] p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-[#8F7023] rounded-full flex items-center justify-center mx-auto mb-4">
                  {partner.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#8F7023] mb-3">
                  {partner.title}
                </h4>
                <p className="text-gray-700">{partner.desc}</p>
              </div>
            ))}
          </div>

          {/* Partnership CTA */}
          <div className="bg-gradient-to-r from-[#8F7023] to-[#8F7023]/80 rounded-lg p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4">
                  Partnership Opportunities
                </h4>
                <p className="text-lg mb-6 opacity-90">
                  Join our growing network of partners and be part of the
                  fashion revolution. Whether you're a retailer, technology
                  provider, or cultural institution, we offer collaborative
                  opportunities that drive mutual growth.
                </p>
                <ul className="space-y-2 text-sm opacity-90">
                  {[
                    "Brand collaboration and co-creation opportunities",
                    "Technology integration and innovation partnerships",
                    "Cultural exchange and educational programs",
                    "Global market expansion and distribution networks",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-lg mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <img
                  src="https://readdy.ai/api/search-image?query=Elegant%20contemporary%20African%20dress%20with%20modern%20Ankara%20patterns%2C%20sophisticated%20silhouette%2C%20professional%20fashion%20photography%2C%20model%20wearing%20beautiful%20African-inspired%20dress%2C%20minimalist%20cream%20background%2C%20high-end%20fashion%20styling%2C%20golden%20lighting%2C%20luxury%20fashion%20photography&amp;width=400&amp;height=600&amp;seq=design-1&amp;orientation=portrait"
                  alt="Partnership opportunities"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Join Mission */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#8F7023] mb-6">
            Join Our Mission
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Together, we're building a future where fashion knows no boundaries,
            where creativity flows freely across cultures, and where every
            designer has the opportunity to share their vision with the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#8F7023] text-[#FCF7EC] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#8F7023]/90 transition-colors">
              Become a Partner
            </button>
            <button className="border-2 border-[#8F7023] text-[#8F7023] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#8F7023] hover:text-[#FCF7EC] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

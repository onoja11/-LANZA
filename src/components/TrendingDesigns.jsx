import React from "react";

const TrendingDesigns = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8F7023] mb-6">
            Trending Designs
          </h2>
          <p className="text-xl text-[#8F7023]/70 max-w-3xl mx-auto">
            Discover the most coveted pieces that are setting global fashion
            trends, blending African craftsmanship with contemporary style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-product-shop="true">
          {/* 1 */}
          <div className="group cursor-pointer">
            <div className="bg-[#FCF7EC] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  alt="Ankara Fusion Dress"
                  className="w-full h-96 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  src="https://readdy.ai/api/search-image?query=Elegant%20contemporary%20African%20dress%20with%20modern%20Ankara%20patterns%2C%20sophisticated%20silhouette%2C%20professional%20fashion%20photography%2C%20model%20wearing%20beautiful%20African-inspired%20dress%2C%20minimalist%20cream%20background%2C%20high-end%20fashion%20styling%2C%20golden%20lighting%2C%20luxury%20fashion%20photography&amp;width=400&amp;height=600&amp;seq=design-1&amp;orientation=portrait"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-heart-line text-[#8F7023] text-sm"></i>
                    </div>
                    <span className="text-xs text-[#8F7023] font-medium">1247</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#8F7023] text-[#FCF7EC] px-3 py-1 rounded-full text-xs font-medium">
                  Dresses
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8F7023] mb-2">
                  Ankara Fusion Dress
                </h3>
                <p className="text-[#8F7023]/60 text-sm mb-3">by Adunni Ade</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#8F7023]">$285</span>
                  <button className="bg-[#8F7023] text-[#FCF7EC] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#8F7023]/90 transition-colors whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="group cursor-pointer">
            <div className="bg-[#FCF7EC] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  alt="Sustainable Kente Blazer"
                  className="w-full h-96 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  src="https://readdy.ai/api/search-image?query=Modern%20sustainable%20fashion%20blazer%20with%20Kente%20patterns%2C%20contemporary%20African%20menswear%2C%20professional%20fashion%20photography%2C%20model%20wearing%20stylish%20African-inspired%20blazer%2C%20minimalist%20cream%20background%2C%20high-end%20fashion%20styling%2C%20warm%20lighting%2C%20luxury%20menswear%20photography&amp;width=400&amp;height=600&amp;seq=design-2&amp;orientation=portrait"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-heart-line text-[#8F7023] text-sm"></i>
                    </div>
                    <span className="text-xs text-[#8F7023] font-medium">892</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#8F7023] text-[#FCF7EC] px-3 py-1 rounded-full text-xs font-medium">
                  Blazers
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8F7023] mb-2">
                  Sustainable Kente Blazer
                </h3>
                <p className="text-[#8F7023]/60 text-sm mb-3">by Kwame Asante</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#8F7023]">$420</span>
                  <button className="bg-[#8F7023] text-[#FCF7EC] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#8F7023]/90 transition-colors whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="group cursor-pointer">
            <div className="bg-[#FCF7EC] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  alt="Urban Dashiki Set"
                  className="w-full h-96 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  src="https://readdy.ai/api/search-image?query=Contemporary%20urban%20streetwear%20set%20with%20Dashiki%20patterns%2C%20modern%20African%20streetwear%2C%20professional%20fashion%20photography%2C%20model%20wearing%20stylish%20African-inspired%20urban%20outfit%2C%20minimalist%20cream%20background%2C%20high-end%20fashion%20styling%2C%20golden%20hour%20lighting%2C%20luxury%20streetwear%20photography&amp;width=400&amp;height=600&amp;seq=design-3&amp;orientation=portrait"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-heart-line text-[#8F7023] text-sm"></i>
                    </div>
                    <span className="text-xs text-[#8F7023] font-medium">1563</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#8F7023] text-[#FCF7EC] px-3 py-1 rounded-full text-xs font-medium">
                  Sets
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8F7023] mb-2">
                  Urban Dashiki Set
                </h3>
                <p className="text-[#8F7023]/60 text-sm mb-3">by Zara Okafor</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#8F7023]">$195</span>
                  <button className="bg-[#8F7023] text-[#FCF7EC] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#8F7023]/90 transition-colors whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Add the other 3 cards similarly... */}
        </div>

        {/* Footer Button */}
        <div className="text-center mt-12">
          <button className="bg-[#8F7023] text-[#FCF7EC] px-8 py-3 rounded-full font-semibold hover:bg-[#8F7023]/90 transition-all duration-300 whitespace-nowrap cursor-pointer">
            Explore All Designs
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingDesigns;

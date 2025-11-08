import React from "react";
import FeaturedCreator from "./FeaturedCreator";

const FeaturedCreators = () => {
  return (
    <section id="featured-creators" className="py-16 bg-[#FCF7EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
          <span className="text-[#8F7023]">Featured Creators</span>
        </h2>

        {/* Subheading */}
        <p className="text-[#8F7023]/70 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
          Meet visionary designers redefining African fashion with creativity,
          craftsmanship, and culture. Discover their unique styles and stories.
        </p>

        {/* Responsive Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-6 
            sm:gap-8 
            mb-8
          "
        >
          <FeaturedCreator />
          <FeaturedCreator />
          <FeaturedCreator />
          <FeaturedCreator />
        </div>

        {/* Discover All Creators Button */}
        <div className="flex justify-center">
          <button
            className="
              bg-white
              text-[#8F7023]
              border
              border-[#8F7023]
              px-8
              py-3
              rounded-full
              text-sm
              sm:text-base
              font-medium
              shadow-md
              hover:text-white
              hover:bg-[#8F7023]
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            Discover All Creators
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;

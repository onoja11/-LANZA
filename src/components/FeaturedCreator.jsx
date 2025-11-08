import React from 'react'
import img from '../assets/elanzaImage.webp'

const FeaturedCreator = () => {
  return (
      <>
       <div className="group cursor-pointer">
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt="Adunni Ade"
          className="w-full h-80 object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#8F7023] mb-2">Adunni Ade</h3>
        <p className="text-[#8F7023]/60 text-sm mb-1">Lagos, Nigeria</p>
        <p className="text-[#8F7023]/80 font-medium mb-4">Contemporary African Wear</p>
        <div className="flex justify-between items-center text-sm text-[#8F7023]/60">
          <span>125K followers</span>
          <span>24 collections</span>
        </div>
        <button className="w-full mt-4 bg-[#8F7023] text-[#FCF7EC] py-2 rounded-full text-sm font-medium hover:bg-[#8F7023]/90 transition-colors whitespace-nowrap">
          View Profile
        </button>
      </div>
    </div>
  </div>


    </>
  )
}

export default FeaturedCreator
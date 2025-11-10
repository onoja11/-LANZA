import React from 'react'
import Hero from '../components/Hero'
import FeaturedCreators from '../components/FeaturedCreators'
import TrendingDesigns from '../components/TrendingDesigns'
import AboutSection from '../components/AboutSection'
import JoinMovement from '../components/JoinMovement'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    <Hero/>
    <FeaturedCreators/>
    <TrendingDesigns/>
    <AboutSection/>
    <JoinMovement/>
    <Footer/>
    </>
  )
}

export default Home
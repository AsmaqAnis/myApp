import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCards from '../components/PricingCards';
import Work from '../components/Work';
import Test from '../components/Test';
const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works." />
      <Work />
      <PricingCards />
      <Test />
      <Footer />
    </div>
  )
}

export default Project
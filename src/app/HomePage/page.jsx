import React from 'react'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import CampaniesLike from './CampaniesLike'
import Services from './Services'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Work from './Work'
import Contect from './Contect'
import Footer from './Footer'

function page() {
  return (
    <div>
      <Navigation/>
      <HeroSection/>
      <CampaniesLike/>
      <Services/>
      <Testimonials/>
      <Faq/>
      <Work/>
      <Contect/>
      <Footer/>
    </div>
  )
}

export default page
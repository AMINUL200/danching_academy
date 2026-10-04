import React from 'react'
import HeroSection from '../../../component/home_page/HeroSection'
import AboutSection from '../../../component/home_page/AboutSection'
import OurCourseSection from '../../../component/home_page/OurCourseSection'
import WhyChooseUsSection from '../../../component/home_page/WhyChooseUsSection'
import SuccessStoriesSection from '../../../component/home_page/SuccessStoriesSection'
import CTASection from '../../../component/home_page/CTASection'

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <OurCourseSection/>
      <WhyChooseUsSection/>
      <SuccessStoriesSection/>
      <CTASection/>
      
    </div>
  )
}

export default LandingPage

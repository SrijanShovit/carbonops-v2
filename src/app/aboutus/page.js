import React from 'react'
import Navbar from '@/components/Aboutus/Navbar'
import Banner from '@/components/Aboutus/Banner'
import Contact from '@/components/Aboutus/Contact'
import Team from '@/components/Aboutus/Team'

const About = () => {
  return (
    <div>

        <Banner/>
        <Contact/>
        <div className='my-24'>
          <Team/>
        </div>
    </div>
  )
}

export default About
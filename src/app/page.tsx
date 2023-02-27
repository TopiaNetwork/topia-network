import React from 'react'
import { RootHeader } from '../components/nav/RootHeader'
import { Section1 } from '../components/landing-page/Section1'
import { Section2 } from '../components/landing-page/Section2'
import { Section3 } from '../components/landing-page/Section3'
import { Section4 } from '../components/landing-page/Section4'
import { RootFooter } from '../components/nav/RootFooter'

const page = async () => {
  return (
    <div className="relative w-full">
      <RootHeader />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <RootFooter />
    </div>
  )
}

export default page

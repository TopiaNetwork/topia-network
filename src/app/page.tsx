import React from 'react'
import { RootHeader } from '../components/nav/RootHeader'
import { Section1 } from '../components/landing-page/Section1'
import { SectionHow } from '../components/landing-page/SectionHow'
import { SectionApplication } from '../components/landing-page/SectionApplication'
import { SectionRoadmap } from '../components/landing-page/SectionRoadmap'
import { RootFooter } from '../components/nav/RootFooter'
import { SectionComparison } from '../components/landing-page/SectionComparison'

const page = async () => {
  return (
    <div className="relative w-full">
      <RootHeader />
      <Section1 />
      <SectionHow />
      <SectionComparison />
      <SectionApplication />
      <SectionRoadmap />
      <RootFooter />
    </div>
  )
}

export default page

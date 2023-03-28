import React from 'react'
import { RootHeader } from '../components/nav/RootHeader/RootHeader'
// import { Section1 } from '../components/landing-page/Section1'
// import { SectionHow } from '../components/landing-page/SectionHow'
// import { SectionApplication } from '../components/landing-page/SectionApplication'
// import { SectionRoadmap } from '../components/landing-page/SectionRoadmap'
// import { RootFooter } from '../components/nav/RootFooter'
// import { SectionComparison } from '../components/landing-page/SectionComparison'
import { HomeBackground } from '../components/home-background/HomeBackground'
import { HomeEnterSection } from '../components/landing-page/HomeEnterSection'
import { HomeWhy } from '../components/landing-page/HomeWhy'
import { HomeHow } from '../components/landing-page/HomeHow'
import { HomeComparison } from '../components/landing-page/HomeComparison'
import { HomeApplication } from '../components/landing-page/HomeApplication'
import { HomeRoadMap } from '../components/landing-page/HomeRoadMap'
import { HomeCommunity } from '../components/landing-page/Community/HomeCommunity'
import { RootFooter } from '../components/nav/RootFooter'
import { Utils } from '../utils/Utils'

const page = async () => {
  return (
    <div className="relative w-full">
      <Utils />
      <HomeBackground />
      <RootHeader />
      <HomeEnterSection />
      <HomeWhy />
      <HomeHow />
      <HomeComparison />
      <HomeApplication />
      <HomeRoadMap />
      <HomeCommunity />
      {/* <Section1 /> */}
      {/* <SectionHow /> */}
      {/* <SectionComparison /> */}
      {/* <SectionApplication /> */}
      {/* <SectionRoadmap /> */}
      <RootFooter />
    </div>
  )
}

export default page

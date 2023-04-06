import React from 'react'
import { RootHeader } from '../components/nav/RootHeader/RootHeader'
import { HomeEnterSection } from '../components/landing-page/HomeEnterSection'
import { HomeWhy } from '../components/landing-page/WhyBuild/HomeWhy'
import { HomeHow } from '../components/landing-page/HomeHow'
import { HomeComparison } from '../components/landing-page/HomeComparison'
import { HomeApplication } from '../components/landing-page/HomeApplication'
import { HomeRoadMap } from '../components/landing-page/HomeRoadMap'
import { HomeCommunity } from '../components/landing-page/Community/HomeCommunity'
import { RootFooter } from '../components/nav/RootFooter/RootFooter'
import { RootFooterPhone } from '../components/nav/RootFooter/RootFooterPhone'
// import { UpToTop } from '../utils/UpToTop'

const page = async () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* <UpToTop /> */}
      <RootHeader />
      <HomeEnterSection />
      <HomeWhy />
      <HomeHow />
      <HomeComparison />
      <HomeApplication />
      <HomeRoadMap />
      <HomeCommunity />
      <RootFooter />
      <RootFooterPhone />
    </div>
  )
}

export default page

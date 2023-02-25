import React from 'react'
import { RootHeader } from '../components/nav/RootHeader'
import { Section1 } from '../components/landing-page/Section1'
import { Section2 } from '../components/landing-page/Section2'

const page = async () => {
  return (
    <div className="relative w-full">
      <RootHeader />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default page

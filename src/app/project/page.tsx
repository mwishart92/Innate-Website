import Navbar from '@/components/Navbar'
import HeroProject from '@/components/Project/HeroProject'
import ProjectDescription from '@/components/Project/ProjectDescription'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroProject />

      <ProjectDescription />
    </div>
  )
}

export default page

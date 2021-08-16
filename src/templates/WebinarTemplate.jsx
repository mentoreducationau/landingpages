import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import {
  TitleBanner,
  CourseHeading,
  MainContainer,
} from "./WebinarTemplate.css"

import {
  Registar,
  WebinarInfo,
  Testimonials,
  CareerSkillSket,
  JobOutcomes,
  BusinessSkillSet,
  AcademicPathways,
  Knowmore,
  Nosubsitute,
  FooterForm,
  StudentsWork,
} from '../components'

const WebinarTemplate = () => {
  return (
    <>
      <TitleBanner>
        <StaticImage src="../images/course-title-bg.png" alt="title background image" />
        <CourseHeading>
          <h1>FNS40217 Certificate IV in Accounting and Bookkeeping</h1>
        </CourseHeading>
      </TitleBanner>
      <MainContainer>
        <WebinarInfo></WebinarInfo>
        <Registar />
        <CareerSkillSket title="How you can further your career with this course" />
        <JobOutcomes />
        <BusinessSkillSet />
        <AcademicPathways />
        <Knowmore />
        <Testimonials />
        <StudentsWork />
        <Nosubsitute />
        <FooterForm />
      </MainContainer>
    </>
  )
}

export default WebinarTemplate

import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import {
  TitleBanner,
  CourseHeading,
  MainContainer,
} from "./WebinarTemplate.css"

import {
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

import { BannerHeadline } from "../styles/Typography.css"

const WebinarTemplate = () => {
  return (
    <>
      <TitleBanner>
        <StaticImage src="../images/course-title-bg.png" alt="title background image" />
        <CourseHeading>
          <BannerHeadline>FNS40217 Certificate IV in Accounting and Bookkeeping</BannerHeadline>
        </CourseHeading>
      </TitleBanner>
      <MainContainer>
        <WebinarInfo />
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

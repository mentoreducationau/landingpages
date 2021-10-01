import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  HeroVideo,
  MainContainer,
  CourseContainer,
  StickySideBar,
} from "./index.css"

import {
  Testimonials,
  CareerSkillSket,
  JobOutcomes,
  BusinessSkillSet,
  AcademicPathways,
  Knowmore,
  Nosubsitute,
  FooterForm,
  StudentsWork,
  CourseInfo,
  JourneyStarted,
  LiveTutorials,
  Faq,
  EnrolNow
} from "../../components"
import CourseGuide from "../../components/Forms/CourseGuide/CourseGuide"
import { Container } from "../../styles/ContainerStyles.css"
import { Headline, Paragraph } from "../../styles/Typography.css"
import playbutton from "../../images/svg/playbutton.svg"

const CourseTemplate = () => {
  return (
    <>
      <HeroVideo>
        <StaticImage
          src="../../images/placeholder.png"
          alt="banner background"
          layout="fullWidth"
        />
        <img className="playbutton" src={playbutton} alt="play" />
        <Paragraph>
          Watch video for comprehensive overview of this course
        </Paragraph>
      </HeroVideo>
      <Container>
        <Headline banner>
          ABC123456 - Certificate IV in Account and Bookkeeping
        </Headline>
      </Container>
      <MainContainer>
        <CourseContainer>
          <CourseInfo />
          <JourneyStarted />
          <LiveTutorials />
          <Faq />
          <CareerSkillSket
            course
            title="Where will this course take your career?"
          />
          <JobOutcomes course />
          <StudentsWork course />
          <FooterForm course />
        </CourseContainer>
        <StickySideBar>
          
          <EnrolNow />
          <CourseGuide course />
        </StickySideBar>
      </MainContainer>
    </>
  )
}

export default CourseTemplate

import React from "react"

import {
  TitleBanner,
  MainContainer,
  CourseContainer,
  StickySideBar,
} from "./index.css"

import {
  FreeConsultBanner,
  FooterForm,
  StudentsWork,
  EnrolNow,
} from "../../components"
import CourseGuide from "../../components/Forms/CourseGuide/CourseGuide"
import { Container } from "../../styles/ContainerStyles.css"
import { Headline } from "../../styles/Typography.css"

const CourseTemplate = () => {
  return (
    <>
      <TitleBanner>
        <Container>
          <Headline banner>
            FNS40217 - Certificate IV in Accounting and Bookkeeping
          </Headline>
        </Container>
      </TitleBanner>
      <MainContainer>
        <CourseContainer>
          <FreeConsultBanner />
          <StudentsWork course />
          <FooterForm course />
        </CourseContainer>
        <StickySideBar>
          <CourseGuide course />
          <EnrolNow />
        </StickySideBar>
      </MainContainer>
    </>
  )
}

export default CourseTemplate

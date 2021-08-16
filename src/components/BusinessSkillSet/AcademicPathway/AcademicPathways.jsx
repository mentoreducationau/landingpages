import React from "react"

import SingleQualification from "./Courses/SingleQualifications"
import DualQualifications from "./Courses/DualQualifications"

import { courses } from "../courses"

import { Container, SectionWrapper } from "../../../styles/ContainerStyles.css"
import { TitleWrapper } from "./AcademicPathway.css"
import { Title } from "../../../styles/Typography.css"

const AcademicPathways = () => {
  const [cards, setCards] = React.useState("single")

  return (
    <Container style={{ marginTop: 0 }}>
      <SectionWrapper justifyContent="center">
        <TitleWrapper>
          <Title onClick={() => setCards("single")}>
            Single Qualification Study
          </Title>
          <Title onClick={() => setCards("dual")}>
            Dual Qualification Study
          </Title>
        </TitleWrapper>
      </SectionWrapper>
      <SectionWrapper justifyContent="center" style={{ overflow: `visible`}}>
          {
              cards === 'single' ? (
                  <SingleQualification courses={courses} />
              ) : (
                  <DualQualifications courses={courses} />
              )
          }
      </SectionWrapper>
    </Container>
  )
}

export default AcademicPathways

import React from "react"

import { courses } from "../courses"

import { SectionWrapper } from "../../../styles/ContainerStyles.css"
import { TitleWrapper } from "./AcademicPathway.css"
import { Title } from "../../../styles/Typography.css"
import SingleQualification from "./Courses/SingleQualifications"
import DualQualifications from "./Courses/DualQualifications"

const AcademicPathways = () => {
  const [cards, setCards] = React.useState("single")

  return (
    <>
      <SectionWrapper justifyContent="center" marginTop="-3rem" style={{ padding: 0 }}>
        <TitleWrapper>
          <Title onClick={() => setCards("single")}>
            Single Qualification Study
          </Title>
          <Title onClick={() => setCards("dual")}>
            Dual Qualification Study
          </Title>
        </TitleWrapper>
      </SectionWrapper>
      <SectionWrapper justifyContent="center" marginTop="2rem" style={{ overflow: `visible`}}>
          {
              cards === 'single' ? (
                  <SingleQualification courses={courses} />
              ) : (
                  <DualQualifications courses={courses} />
              )
          }
      </SectionWrapper>
    </>
  )
}

export default AcademicPathways

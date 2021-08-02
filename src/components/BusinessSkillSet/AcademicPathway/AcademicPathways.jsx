import React from "react"

import {courses} from "../courses"

import { SectionWrapper } from "../../../styles/ContainerStyles.css"
import { TitleWrapper, CardsWrapper } from "./AcademicPathway.css"
import { Title } from "../../../styles/Typography.css"
import CourseCard from "./CourseCard"
import SingleQaulifications from "./Courses/SingleQaulifications"
import DualQaulifications from "./Courses/DualQaulifications"

const AcademicPathways = () => {
  const [cards, setCards] = React.useState("single")


  return (
    <>
      <SectionWrapper justifyContent="center" marginTop="-3rem">
        <TitleWrapper>
          <Title onClick={() => setCards("single")}>
            Single Qaulification Study
          </Title>
          <Title onClick={() => setCards("dual")}>
            Dual Qaulification Study
          </Title>
        </TitleWrapper>
      </SectionWrapper>
      <SectionWrapper justifyContent="center" marginTop="2rem">
          {
              cards === 'single' ? (
                  <SingleQaulifications courses={courses}/>
              ) : (
                  <DualQaulifications  courses={courses} />
              )
          }
      </SectionWrapper>
    </>
  )
}

export default AcademicPathways

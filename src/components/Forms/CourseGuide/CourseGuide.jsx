import React from "react"
import { CourseGuideContainer } from "./CourseGuide.css"
import { CustomForm } from "../FormFieldComponent"
import { H3 } from "../../../styles/Typography.css"

const CourseGuide = ({course}) => {
  const handleSubmit = v => {
    console.log(v)
  }
  return (
    <CourseGuideContainer course={course}>
      <H3 course={course}>Download a Course Guide</H3>
      {/* <h3>Fill out your details to download now!</h3> */}
      <CustomForm course={course} buttonText="Download" handleSubmit={handleSubmit} />
    </CourseGuideContainer>
  )
}

export default CourseGuide

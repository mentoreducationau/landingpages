import React from "react"
import { CourseGuideContainer } from "./CourseGuide.css"
import { CustomForm } from "../FormFieldComponent"
import { H3 } from "../../../styles/Typography.css"

const CourseGuide = () => {
  const handleSubmit = v => {
    console.log(v)
  }
  return (
    <CourseGuideContainer>
      <H3>Download a Course Guide</H3>
      {/* <h3>Fill out your details to download now!</h3> */}
      <CustomForm buttonText="Download" handleSubmit={handleSubmit} />
    </CourseGuideContainer>
  )
}

export default CourseGuide

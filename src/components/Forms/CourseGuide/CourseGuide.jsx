import React from "react"
import { CourseGuideContainer } from "./CourseGuide.css"
import { CustomForm } from "../FormFieldComponent"
import { H3 } from "../../../styles/Typography.css"

const CourseGuide = () => {
  return (
    <CourseGuideContainer>
      <H3>Download a Course Guide</H3>
      {/* <h3>Fill out your details to download now!</h3> */}
      <CustomForm buttonText="Download" />
    </CourseGuideContainer>
  )
}

export default CourseGuide

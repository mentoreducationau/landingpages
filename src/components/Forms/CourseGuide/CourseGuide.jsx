import React from "react"
import { CourseGuideContainer } from "./CourseGuide.css"
import { CustomForm } from "../FormFieldComponent"

const CourseGuide = () => {
  return (
    <CourseGuideContainer>
      <h1>Download a Course Guide</h1>
      {/* <h3>Fill out your details to download now!</h3> */}
      <CustomForm buttonText="Download" />

    </CourseGuideContainer>
  )
}

export default CourseGuide

import React from "react"
import { CourseGuideContainer, CourseGuideForm, Input, Button } from "./CourseGuide.css"
import Testimonials from "../../Testimonial/Testimonial"

const CourseGuide = () => {
  return (
    <CourseGuideContainer>
      <h1>Download a Course Guide</h1>
      <h3>Fill out your details to download now!</h3>
      <CourseGuideForm>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Phone" />
        <Button action="submit"> Download</Button>
      </CourseGuideForm>

    </CourseGuideContainer>
  )
}

export default CourseGuide

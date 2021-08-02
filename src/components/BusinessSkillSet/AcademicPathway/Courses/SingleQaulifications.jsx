import React, { useEffect } from "react"
import { CardsWrapper } from "../AcademicPathway.css"
import CourseCard from "../CourseCard"

const SingleQaulifications = ({ courses }) => {
  const [singleCourses, setSingleCourses] = React.useState([])
  if (courses[6].type == "dualQaulification") console.log("meh")

  useEffect(() => {
    const newSingleCourses = []
    courses &&
      courses.map(course => {
        if (course.type !== "dualQaulification") newSingleCourses.unshift(course)
      })
    setSingleCourses(newSingleCourses)
  }, [courses])

  return (
    <CardsWrapper>
      {singleCourses.map((course, i) => (
        <CourseCard course={course} key={i} />
      ))}
    </CardsWrapper>
  )
}

export default SingleQaulifications

import React from "react"
import { StaticImage } from "gatsby-plugin-image" 

import CourseCardModal from "./CourseCardModal"
import { useDisableBodyScroll } from "../../../../utils/bodyScroll"

import {
  CourseCardWrapper,
  CourseCardTitle,
  CourseCardButton,
  CourseCardButtonContainer,
} from "./courseCard.css"

const CourseCard = ({ course, dualCourse = false }) => {
//   console.log(`course`, course)
  const [displayModal, setDisplayModal] = React.useState(false)

  useDisableBodyScroll(displayModal)

  if (course === []) return null

  return (
    <div style={{ width: `100%`, height: `100%` }}>
      <CourseCardWrapper>
        <StaticImage src="../../../../images/card-imgs/acc/eg.png" alt="course-image" />
        {!dualCourse && (
          <CourseCardTitle>
            <h4>{course.courseCode} —</h4> {course.courseName}
          </CourseCardTitle>
        )}
        {dualCourse && (
          <>
            <CourseCardTitle>{course.courseName}</CourseCardTitle>
            <CourseCardTitle>
              {course.courseA.courseCode} - {course.courseA.courseName}
            </CourseCardTitle>
            <CourseCardTitle>
              {course.courseB.courseCode} - {course.courseB.courseName}
            </CourseCardTitle>
          </>
        )}
        <CourseCardButtonContainer>
          {/* <CourseCardButton>Course Guide</CourseCardButton> */}
          <CourseCardButton onClick={() => setDisplayModal(true)}>
            Find Out More
          </CourseCardButton>
        </CourseCardButtonContainer>
      </CourseCardWrapper>
      <CourseCardModal
        display={displayModal}
        course={course}
        setDisplayModal={setDisplayModal}
      />
    </div>
  )
}

export default CourseCard

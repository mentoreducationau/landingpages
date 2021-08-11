import React from "react"

import CourseCardModal from "./Courses/CourseCardModal"
import {
  CourseCardWrapper,
  CourseCardTitle,
  CourseCardImg,
  CourseCardButton,
  CourseCardButtonContainer,
} from "./AcademicPathway.css"

import cardEg from "../../../images/card-imgs/acc/eg.png"

const CourseCard = ({ course, dualCourse = false }) => {
//   console.log(`course`, course)
  const [displayModal, setDisplayModal] = React.useState(false)

  if (course === []) return null

  return (
    <div style={{ width: `100%`, height: `100%` }}>
      <CourseCardWrapper>
        <CourseCardImg src={cardEg} />
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

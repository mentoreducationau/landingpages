import React from 'react'

import CourseCardModal from './Courses/CourseCardModal'
import { CourseCardWrapper, CourseCardTitle, CourseCardImg, CourseCardButton, CourseCardButtonContainer } from './AcademicPathway.css'

import cardEg from '../../../images/card-imgs/acc/eg.png'

const CourseCard = ({course}) => {
console.log(`course`, course)
const [displayModal, setDisplayModal] = React.useState(false)
    return (
        <div style={{overflow: `hidden`}}>
       <CourseCardWrapper>
           <CourseCardImg src={cardEg}/>
           <CourseCardTitle>{course.courseCode} - {course.courseName}</CourseCardTitle>
           <CourseCardButtonContainer>
           <CourseCardButton>Course Guide</CourseCardButton>
           <CourseCardButton
           onClick={() => setDisplayModal(true)}
           >Find Out More</CourseCardButton>
           </CourseCardButtonContainer>
       </CourseCardWrapper>
       <CourseCardModal display={displayModal} course={course} setDisplayModal={setDisplayModal}/>
       </div>
    )
}

export default CourseCard

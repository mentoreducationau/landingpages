import React from 'react'

import eg from '../../../../images/card-imgs/photos/eg.png'
import { Paragraph, Title } from '../../../../styles/Typography.css'
import CourseGuide from '../../../Forms/CourseGuide/CourseGuide'
import { CourseCardModalContainer, CourseCardModalWrapper, CloseButton,  LeftContainer,InnerWrapper,
    RightContainer, ModalImage, VisitCourseLink } from '../AcademicPathway.css'

const CourseCardModal = ({display, setDisplayModal, course}) => {
    console.log(course.introduction)
    return (
        <CourseCardModalWrapper display={display}>
            <CourseCardModalContainer>
                <CloseButton
                onClick={() => setDisplayModal(false)}
                >X</CloseButton>

            <InnerWrapper>
            <LeftContainer>
            <ModalImage src={eg} />
            <Title
            marginTop="1.25rem"
            >{course.courseCode} - {course.courseName}</Title>
{course.introduction.includes('\n') ? (
    <Paragraph    marginTop="1rem"> {course.introduction.substring(0, course.introduction.indexOf("\n"))}</Paragraph>
) :
<Paragraph>{course.introduction}</Paragraph>}
            
            </LeftContainer>
            <RightContainer>
                <CourseGuide/>
                <Title>
                    <VisitCourseLink href={`https://www.mentor.edu.au/courses/${course.link}`} target="_blank"> Visit Course Page </VisitCourseLink>
                </Title>
            </RightContainer>
            </InnerWrapper>
            </CourseCardModalContainer>
        </CourseCardModalWrapper>
    )
}

export default CourseCardModal

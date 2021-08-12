import React from "react"
import {
  TitleBanner,
  TitleBGImage,
  CourseHeading,
  MainContainer,
} from "./WebinarTemplate.css"
import bannerImg from "../images/bannerBg.jpeg"
import Registar from "../components/Forms/Register/Register"
import WebinarInfo from "../components/WebinarInfo/WebinarInfo"
import Testimonials from "../components/Testimonial/Testimonial"
import CareerSkillSket from "../components/CareerSkillSket/CareerSkillSket"
import JobOutcomes from "../components/JobOutcomes/JobOutcomes"
import BusinessSkillSet from "../components/BusinessSkillSet/BusinessSkillSet"
import AcademicPathways from "../components/BusinessSkillSet/AcademicPathway/AcademicPathways"
import Knowmore from "../components/Knowmore/Knowmore"
import Nosubsitute from "../components/Nosubstitute/Nosubstitute"
import FooterForm from '../components/FooterForm/FooterForm';
import StudentsWork from "../components/StudentsWork"
import FooterComponent from "../components/Footer/footer"

const WebinarTemplate = () => {
  return (
    <>
      <TitleBanner>
        <TitleBGImage src={bannerImg} alt="" />
        <CourseHeading>
          <h1>FNS40217 Certificate IV in Accounting and Bookkeeping</h1>
        </CourseHeading>
      </TitleBanner>
      <MainContainer>
        <WebinarInfo></WebinarInfo>
        <Registar />

        <CareerSkillSket
          subtitle="dark"
          title="How you can further your career with this course"
        />
         <JobOutcomes />
         <BusinessSkillSet/>
        <AcademicPathways/> 
        <Testimonials/>
        <Knowmore></Knowmore>
        <StudentsWork/>
        <Nosubsitute />
        
        <FooterForm/>
       
      
      </MainContainer>
    </>
  )
}

export default WebinarTemplate

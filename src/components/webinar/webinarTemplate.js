import React from "react"
import styled from "styled-components"

import bannerImg from "../../images/bannerBg.jpeg"
import Registar from "./forms/registar"
import WebinarInfo from "./webinarInfo"

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
        <WebinarInfo>
        </WebinarInfo>
        <Registar/>
      </MainContainer>
    </>
  )
}

export default WebinarTemplate
const TitleBanner = styled.div`
  width: 99vw;
  height: 10rem;
  background: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleBGImage = styled.img`
  width: 100vw;
  object-fit: cover;
  opacity: 0.4;
`
const CourseHeading = styled.div`
  position: absolute;

  h1 {
    color: white;
    margin: 0;
  }
`
const MainContainer = styled.div`
width: 99vw;
height: 100%;
display: flex;
justify-content: center;
`


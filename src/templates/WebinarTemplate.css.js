import styled from "styled-components"

export const TitleBanner = styled.div`
  position: relative;
  /* height: 10rem; */
  background: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .gatsby-image-wrapper {
    width: 100%;
  }
`
export const CourseHeading = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
`
export const MainContainer = styled.div`
  width: 99vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap : wrap;
  justify-content: center;
`

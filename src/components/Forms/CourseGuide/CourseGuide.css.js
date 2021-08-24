import styled from "styled-components"

export const CourseGuideContainer = styled.div`
  width: 100%;
  height: 100%;

  h3 {
    margin: 30px;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    width: 25vw;

    h3 {
      margin: 16px 0;
    }
  }
`
import styled from "styled-components"
import { Container } from "../../styles/ContainerStyles.css"
import { SpanHeavy } from "../../styles/Typography.css"

export const KnowmoreContainer = styled(Container)`
  max-width: 84vw;

  h2 {
    max-width: 70%;
    margin: 0 auto;
  }
`
export const KnowmoreBoxes = styled.div`
  display: flex;
  justify-content: center;
`

export const KnowmoreBox = styled.div`
  width: 50%;
  text-align: center;
  
  div:first-child {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  div:last-child {
    max-width: 75%;
    margin: auto;
    text-align: left;
  }
`

export const Percentage = styled(SpanHeavy)`
  font-size: 94px;
  line-height: 122px;
  opacity: 1;
  margin-top: 8%;
  /* vertical-align: super; */
`

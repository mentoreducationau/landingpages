import styled from "styled-components"
import { Container } from "../../styles/ContainerStyles.css"
import { SpanHeavy } from "../../styles/Typography.css"

export const KnowmoreContainer = styled(Container)`
  max-width: 84vw;

  h2 {
    max-width: 90%;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 768px) {
      max-width: 70%;
    }
  }
`
export const KnowmoreBoxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const KnowmoreBox = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0 0;

  div:first-child {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  div:last-child {
    margin: auto;
  }

  @media (min-width: 768px) {
    width: 50%;

    div:last-child {
      max-width: 75%;
      margin: auto;
    }
  }
`

export const Percentage = styled(SpanHeavy)`
  font-size: 55px;
  line-height: 71px;
  opacity: 1;
  margin-top: 16%;
  /* vertical-align: super; */

  @media (min-width: 768px) {
    margin-top: 8%;
    font-size: 94px;
    line-height: 122px;
  }
`

import styled, { keyframes } from "styled-components"
import { Container } from "../../styles/ContainerStyles.css"
import { Subtitle } from "../../styles/Typography.css"

export const fade = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: initial;
    opacity: 1;
  }
`

export const JobOutcomesContainer = styled(Container)`
  display: flex;
  justify-content: center;

  font: 33px/40px Futura;
`

export const JobDetailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: ${props => props.last ? "33%" : "29%"};
  flex-direction: column;
`

export const JobTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const JobTitle = styled(Subtitle)`
  margin: 0;
  width: 100%;
`

export const SeparatorLine = styled.div`
  width: ${props => props.width};
  height: ${props => props.height ? props.height : "4px"};
  background: #707070;
  margin: 0 2rem;
  opacity: ${props => (props.displayJob === props.id ? 1 : 0)};
  display: ${props => (props.displayJob === props.id ? "initial" : "none ")};
  animation: ${fade} 0.2s linear;
`

const QualificationsUL = styled.ul`
  opacity: ${props => (props.displayJob === props.id ? 1 : 0)};
  display: ${props => (props.displayJob === props.id ? "inline" : "none ")};
  line-height: 2rem;
  margin-bottom: 0;
  padding: 1rem 0;
`

export const QualificationsList = styled(QualificationsUL)`
  animation: ${fade} 0.2s linear;
`

export const JobListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  margin: 0;

  p {
    margin: 0;
    width: 100%;
  }
`

export const QaulificationLink = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  line-height: inherit;
`

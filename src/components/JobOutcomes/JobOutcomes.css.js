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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font: 33px/40px Futura;
  color: #707070;
`

export const JobDetailWrapper = styled.div`
  display: flex;
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
  max-width: fit-content;
`

export const SeparatorLine = styled.div`
  width: ${props => props.width};
  height: ${props => props.height ? props.height : "4px"};
  background: #707070;
  margin: ${props => props.margin ? props.margin : "0 1rem"};
  opacity: ${props => (props.displayJob === props.id ? 1 : 0)};
  display: ${props => (props.displayJob === props.id ? "initial" : "none ")};
  animation: ${fade} 0.2s linear;
`

const QualificationsUL = styled.ul`
  opacity: ${props => (props.displayJob === props.id ? 1 : 0)};
  display: ${props => (props.displayJob === props.id ? "inline" : "none ")};
  line-height: 2rem;
  margin: 0;
  padding: 1rem 0;
`

export const QualificationsList = styled(QualificationsUL)`
  animation: ${fade} 0.2s linear;

  a {
    color: #707070;
    font-weight: 600;
  }

  .font-bold {
    font-weight: 900;
  }

  .underline {
    text-decoration: underline;
  }
`

export const JobListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  margin: 0;

  p {
    margin: 0;
    margin-right: 1rem;
    width: 100%;
    max-width: fit-content;
  }
`

export const QaulificationLink = styled.a`
  color: black;
  text-decoration: none;
  display: block;
  line-height: inherit;
`

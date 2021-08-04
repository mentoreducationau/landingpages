import styled, {keyframes} from 'styled-components'
import {Title} from '../../styles/Typography.css'
const JobOutcomesWrapper = styled.div`
margin: 4rem 2rem;
width: 99vw;
padding: 0 4rem;
display: flex;
justify-content: center;

`
const JobName = styled.div`
display: flex;
justify-content: flex-start;
width: 22%;
flex-direction: column;
flex-wrap: wrap;
`
const JobTitle = styled(Title)`
text-decoration: overline;
`


const fade = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: inline;
    opacity: 1;
    height: auto;
  }
`;

const DisplayArrow = styled.ul`
opacity: ${props => props.displayJob === props.id ? 1 : 0};
display: ${props => props.displayJob === props.id ? 'inline' : 'none '};
margin: 0;
`

const Arrow = styled(DisplayArrow)`
  animation: ${fade} .2s linear;
`;


const JobSallary = styled.div`
display: flex;
flex-direction: column;

width: 22%;
`

const JobRequiredCourse = styled.div`
display: flex;
flex-direction: column;
width: 42%;
`

const QaulificationsUL = styled.ul`
opacity: ${props => props.displayJob === props.id ? 1 : 0};
display: ${props => props.displayJob === props.id ? 'inline' : 'none '};
line-height: 2rem;
margin: 0;
`

const QaulificationsList = styled(QaulificationsUL)`
  animation: ${fade} .2s linear;
`;



const JobListItem = styled.li`
display: flex;
`



const QaulificationLink = styled.a`
color: black;
text-decoration: none;
display: block;
line-height: inherit;
`

export {
    JobOutcomesWrapper,
    JobTitle,
    JobName,
    Arrow,
    JobListItem,
    QaulificationsList,
    QaulificationLink,
    JobSallary,
    JobRequiredCourse
}
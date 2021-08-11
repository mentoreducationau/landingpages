import styled, { keyframes } from "styled-components"
import { ButtonPrimary } from "../../../styles/ButtonStyles.css"

const fade = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: flex;
    opacity: 1;
   
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;

  h2 {
    font: 42px/54px Futura Heavy;
    margin: 0 1rem;
    color: #707070;
  }
`

const CardsWrapper = styled.div`
  --repeat: auto-fit;

  @media (min-width: calc(250px * 5)) {
    --repeat: 4;
  }
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(
    var(--repeat, auto-fit),
    minmax(calc(250px * 1), 1fr)
  );
  grid-template-rows: auto;
  gap: 25px;
  /* justify-content: space-around; */
  width: 100%;
  /* flex-wrap: wrap; */
`

// Course Card

const CourseCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: Futura Heavy;
  /* margin: 15px 20px 50px 20px; */
  padding: 2rem;
  border-radius: 22px;
  border: 1px solid rgba(0, 0, 0, 7%);
  -webkit-box-shadow: 10px 0px 13px -7px rgba(0, 0, 0, 5%),
    5px 5px 15px 5px rgba(0, 0, 0, 1%);
  box-shadow: 10px 0px 13px -7px rgba(0, 0, 0, 5%),
    5px 5px 15px 5px rgba(0, 0, 0, 1%);
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`
const CourseCardImg = styled.img`
  width: 70%;
  background: slateblue;
`
const CourseCardTitle = styled.div`
  /* text-align: center; */
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 18px;

  h4 {
    font-size: 23px;
    margin: 0;
  }
`

const CourseCardButtonContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 0.5rem;
`
const CourseCardButton = styled(ButtonPrimary)`
  font-family: Futura Heavy;
  font-size: 26px;
  padding: 0.75rem;
  width: 100%;
  margin: 0.1rem;
  background-color: #CC4A28;
  border-radius: 10px;
`

const CourseCardModalWrapper = styled.div`

  display: ${props => (props.display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  height: 98vh;
  width: 99vw;
  margin: 0;
  background: rgba(0, 0, 0, 20%);
  bottom: 0;
  right: 0;
`



const CourseCardModalCard= styled.div`
  height: 90%;
  width: 80%;

  opacity: ${props => props.display === props.id ? 1 : 0};
  display: ${props => props.display === props.id ? 'inline' : 'none '};
  background: white;
  border-radius: 20px;
  position: relative;
  z-index: 2;
`
const CourseCardModalContainer = styled(CourseCardModalCard)`
  animation: ${fade} .2s linear;

`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem 2.5rem;
  color: red;
  font-weight: bold;
  z-index: 3;
`

const InnerWrapper = styled.div`
height: 100%;
width: 100%;
display:flex;
padding: 3rem;
`

const LeftContainer = styled.div`
height: 100%;
width: 60%;

display: flex;

flex-direction: column;
`

const RightContainer = styled.div`
width: 40%;
height: 100%;
display:flex;
align-items: center;
flex-direction: column;

`

const ModalImage = styled.div`
 background-image: ${(props) => `url('${props.src}')`};
 background-repeat: no-repeat;
  background-size: cover;
width: 100%;
aspect-ratio: 3/1.5;
`

const VisitCourseLink = styled.a`
text-decoration: UNDERLINE;
color: black;
font-size: 110%;
`

export {
  TitleWrapper,
  CardsWrapper,
  CourseCardWrapper,
  CourseCardImg,
  CourseCardTitle,
  CourseCardButtonContainer,
  CourseCardButton,
  CourseCardModalWrapper,
  CourseCardModalContainer,
  CloseButton,
  InnerWrapper,
  LeftContainer,
  RightContainer,
  ModalImage,
  VisitCourseLink
}

import styled , {keyframes} from "styled-components"

const rotate = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: inline;
    opacity: 1;
    /* height: auto; */
  }
`;

export const TestimonialSlideWrapper= styled.div`
  width: 99vw;
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  padding: 0 150px;
  overflow: hidden;
  animation: ${rotate} .2s linear;
  opacity: ${props => props.activeTab ? 1 : 0};
  display: ${props => props.activeTab  ? 'inline' : 'none '};
  transition: opacity .3s ease-out;
`

export const TestimonialSlideContainer = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 33% 67%;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
`

const SliderArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 21px solid transparent;
  border-bottom: 21px solid transparent;
  display: inline-block;
`
export const SliderArrowLeft = styled(SliderArrow)`
  border-right: 42px solid #ff0000;
`

export const SliderArrowRight = styled(SliderArrow)`
  border-left: 42px solid #FF0000;
  margin-left:20px;
`

export const TestimonialSlideInfo = styled.div`
  width: 80%;
  margin: auto;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
    grid-row: 1;
  }

  h4 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 43.5px;
    letter-spacing: 0px;
    text-align: left;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  span {
    letter-spacing: 0px;
    color: #f40000;
    opacity: 1;
    font-size: 27px;
    font-weight: 900;
    line-height: 33px;
  }

  p {
    line-height: 30px;
    color: #535353;
    letter-spacing: 0px;
    font-weight: 500;
    font-size: 24px;
    margin: 2rem 0;
  }
`

export const Image = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #707070;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`
export const TestimonialSlideImage = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
  }
`


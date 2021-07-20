import styled from "styled-components"


export const TestimonialContainer = styled.div`
height: 50rem;
width: 100%;
overflow: hidden;
position: relative;
`
export const TestimonialCarousel = styled.div`
height: 10rem;
width: 20rem;

flex-wrap: nowrap;
`
export const TestimonialCarouselBG = styled.img`
height: 100%;
opacity: 1;
position: absolute;
`
export const TestimonialCard = styled.div`
height: 10rem;
position: absolute;
z-index: 2;
top: 20;
left: ${props => props.order};
height: 10rem;
width: 100%;

p {
  z-index: 3;
  color: black;
  margin: 15.5rem 0 0 0;
  padding: 1rem;
  background-color: white;
}
`
export const TitleBGImage = styled.img`
width: 100vw;
height: 250%;
object-fit: cover;
opacity: 0.9;
position: absolute;
z-index: -1;
`
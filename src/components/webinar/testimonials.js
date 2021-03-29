import React from "react"
import styled from "styled-components"


import JL from "../../images/happy.png"
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ali M",
      testimonial:
        "Mentor staff and Miler have helped me to complete my assessments and course in time. Appreciate your time and support. Warm Regards, Ali",
    },
    {
      name: "Praful D",
      testimonial:
        "Excellent experience working with the team. They are very understanding and useful. ... ",
    },
    {
      name: "Nick",
      testimonial:
        "Very great team and supportive team. The best staff and the best assessors I have dealt with. Very helpful and so understanding. They live and breathe assistance. ",
    },
  ]
  return (
    <TestimonialContainer>
      <h3>What our previous students say</h3>
      
      <TestimonialCarousel>
      
        {testimonials.map((testimonial, i) => (
          <TestimonialCard order={`${i * 100}%`}>
            <TitleBGImage src={JL} alt="" />
            <p>{testimonial.testimonial}</p>
            <span
            style={{fontStyle:'italic',
            fontWeight: `bold`,
        float: `right`}}
            >{testimonial.name}</span>
          </TestimonialCard>
        ))}
      </TestimonialCarousel>
    </TestimonialContainer>
  )
}

export default Testimonials

const TestimonialContainer = styled.div`
  height: 50rem;
  width: 100%;
  overflow: hidden;
  position: relative;
`
const TestimonialCarousel = styled.div`
  height: 10rem;
  width: 20rem;

  flex-wrap: nowrap;
`
const TestimonialCarouselBG = styled.img`
height: 100%;
opacity: 1;
position: absolute;
`
const TestimonialCard = styled.div`
  height: 10rem;
  position: absolute;
  z-index: 2;
  top: 20;
  left: ${props => props.order};
  height: 10rem;
  width: 100%;
  

  p{
      z-index: 3;
      color: black;
      margin: 15.5rem 0 0 0;
      padding: 1rem;
      background-color: white;
  }
`
const TitleBGImage = styled.img`
  width: 100vw;
  height: 250%;
  object-fit: cover;
  opacity: 0.9;
  position: absolute;
  z-index: -1;
`
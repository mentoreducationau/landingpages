import React from "react"
import {
  TestimonialSlideContainer,
  TestimonialSlideWrapper,
  TestimonialSlideImage,
  TestimonialSlideInfo,
  Image,
  TestimonialSlideArrow,
  TestimonialRightSlideArrow
} from "./TestimonialSlide.css"

const TestimonialSlide = (props) => {

  return (
    <TestimonialSlideWrapper activeTab={props.active}>
      <TestimonialSlideContainer>
        <TestimonialSlideImage>
          <Image src={props.data.imageurl} />
        </TestimonialSlideImage>
        <TestimonialSlideInfo>
          <h4 dark>{props.data.name}</h4>
          <div>{props.data.jobtitle}</div>
          <p>
            {props.data.info}
          </p>
          <TestimonialSlideArrow onClick={() => props.prevSlide()} />
          <TestimonialRightSlideArrow  onClick={() => props.nextSlide()} />
        </TestimonialSlideInfo>
      </TestimonialSlideContainer>
    </TestimonialSlideWrapper>
  )
}

export default TestimonialSlide

import React from "react"
import {
  TestimonialSlideContainer,
  TestimonialSlideWrapper,
  TestimonialSlideImage,
  TestimonialSlideInfo,
  Image,
  SliderArrowLeft,
  SliderArrowRight
} from "./TestimonialSlide.css"

import { QuoteSvg } from '../../images/svg/quotations'

const TestimonialSlide = (props) => {

  return (
    <TestimonialSlideWrapper activeTab={props.active}>
      <TestimonialSlideContainer>
        <TestimonialSlideImage>
          <Image src={props.data.imageurl} />
        </TestimonialSlideImage>
        <TestimonialSlideInfo>
          <h4 dark>{props.data.name}</h4>
          <span>{props.data.jobtitle}</span>
          <p>
            <QuoteSvg left />
            {props.data.info}
            <QuoteSvg right />
          </p>
          <SliderArrowLeft onClick={() => props.prevSlide()} />
          <SliderArrowRight  onClick={() => props.nextSlide()} />
        </TestimonialSlideInfo>
      </TestimonialSlideContainer>
    </TestimonialSlideWrapper>
  )
}

export default TestimonialSlide

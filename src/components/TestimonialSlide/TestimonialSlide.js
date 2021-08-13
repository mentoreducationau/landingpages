import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import {
  TestimonialSlideContainer,
  TestimonialSlideWrapper,
  TestimonialSlideImage,
  TestimonialSlideInfo,
  SliderArrowLeft,
  SliderArrowRight,
} from "./TestimonialSlide.css"

import { QuoteSvg } from "../../images/svg/quotations"

const TestimonialSlide = props => {
  const {
    allFile: { nodes: images },
  } = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(transformOptions: { fit: COVER })
          }
        }
      }
    }
  `)

  const img = images.filter(image => image.relativePath === props.data.imageurl)

  return (
    <TestimonialSlideWrapper activeTab={props.active}>
      <TestimonialSlideContainer>
        <TestimonialSlideImage>
          <GatsbyImage
            image={img[0].childImageSharp.gatsbyImageData}
            alt={img[0].name}
          />
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
          <SliderArrowRight onClick={() => props.nextSlide()} />
        </TestimonialSlideInfo>
      </TestimonialSlideContainer>
    </TestimonialSlideWrapper>
  )
}

export default TestimonialSlide

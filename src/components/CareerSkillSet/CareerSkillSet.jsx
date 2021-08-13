import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  CareerSkillSketcontainer,
  CareerSkillSketWrapper,
  CareerSkillImage,
  CareerInfo,
} from "./Careerskillset.css"

import { Title } from "../../styles/Typography.css"

const CareerSkillSket = ({ title, subtitle }) => {
  const {
    career_image: { name, childImageSharp: img },
  } = useStaticQuery(graphql`
    query {
      career_image: file(relativePath: { eq: "career.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(transformOptions: { fit: COVER })
        }
      }
    }
  `)
  return (
    <CareerSkillSketWrapper>
      <Title weight={700} color="#707070">
        {title}
      </Title>
      <CareerSkillSketcontainer>
        <CareerSkillImage>
          <GatsbyImage image={img.gatsbyImageData} alt={name} />
          {/* <Image src={career} /> */}
        </CareerSkillImage>
        <CareerInfo title={subtitle}>
          <h4>Career Skillsets</h4>
          <p className={subtitle}>
            This role looks after the administrative side of contracts within
            project management, with all relevant stakeholders. This involves
            assisting in the contract process from start to finish, and requires
            strong communication skills, as well as attention to detail and
            written skills.
          </p>
        </CareerInfo>
      </CareerSkillSketcontainer>
    </CareerSkillSketWrapper>
  )
}

export default CareerSkillSket
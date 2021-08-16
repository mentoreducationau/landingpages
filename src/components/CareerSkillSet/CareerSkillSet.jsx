import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  CareerSkillSetcontainer,
  CareerInfo,
} from "./Careerskillset.css"

import { Container } from "../../styles/ContainerStyles.css"
import { Title, Subtitle, Paragraph } from "../../styles/Typography.css"

const CareerSkillSket = ({ title }) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <CareerSkillSetcontainer>
        <StaticImage src="../../images/career.jpg" alt="career-img" />
        <CareerInfo>
          <Subtitle>Career Skillsets</Subtitle>
          <Paragraph>
            This role looks after the administrative side of contracts within
            project management, with all relevant stakeholders. This involves
            assisting in the contract process from start to finish, and requires
            strong communication skills, as well as attention to detail and
            written skills.
          </Paragraph>
        </CareerInfo>
      </CareerSkillSetcontainer>
    </Container>
  )
}

export default CareerSkillSket